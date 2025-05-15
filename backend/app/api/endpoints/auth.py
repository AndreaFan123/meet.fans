from datetime import timedelta
from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app import schemas
from app.api import deps
from app.core.security import create_access_token
from app.core.config import settings
from app.services import user_service

router = APIRouter()


@router.post("/register", response_model=schemas.User)
def register(user_in: schemas.UserCreate, db: Session = Depends(deps.get_db)) -> Any:
    """
    Register a new user
    """

    user = user_service.get_user_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="該信箱已存在"
        )

    user = user_service.get_user_by_username(db, username=user_in.username)
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="該使用者名稱已存在"
        )

    user = user_service.create_user(db, obj_in=user_in)
    return user


@router.post("/login", response_model=schemas.Token)
def login(
    db: Session = Depends(deps.get_db), form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    Get access token for user authentication
    """
    user = user_service.authenticate(
        db, email=form_data.username, password=form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="錯誤的信箱或密碼",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="尚未被啟用的使用者"
        )

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(user.id, expires_delta=access_token_expires)

    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=schemas.User)
def read_users_name(current_user: schemas.User = Depends(deps.get_current_user)) -> Any:
    """
    Get current user information
    """
    return current_user
