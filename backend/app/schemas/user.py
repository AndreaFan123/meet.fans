# backend/app/schemas/user.py
from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    """Base schema with common User attributes"""

    email: EmailStr
    username: str = Field(..., min_length=3, max_length=50)


class UserCreate(UserBase):
    """Schema for creating a new user (registration)"""

    password: str = Field(..., min_length=8)


class UserLogin(BaseModel):
    """Schema for user login credentials"""

    email: EmailStr
    password: str


class UserUpdate(BaseModel):
    """Schema for updating user information"""

    email: Optional[EmailStr] = None
    username: Optional[str] = Field(None, min_length=3, max_length=50)
    password: Optional[str] = Field(None, min_length=8)
    profile_image: Optional[str] = None


class UserInDBBase(UserBase):
    """Schema for user data from the database"""

    id: int
    is_active: bool
    profile_image: Optional[str] = None
    created_at: datetime

    class Config:
        orm_mode = True


class User(UserInDBBase):
    """Schema for user data returned to clients"""

    pass


class UserWithStats(User):
    """Extended user schema with hosting and participation stats"""

    hosted_events_count: int
    participating_events_count: int
