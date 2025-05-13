from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, Datetime
from sqlalchemy.orm import relationship
from app.db.base_class import Base


class User(Base):
    __tabelname__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    username = Column(String(50), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    profile_image = Column(String(255), nullable=True)
    created_by = Column(Datetime, default=datetime.utcnow)
    updated_by = Column(Datetime, default=datetime.utcnow, onupdate=datetime.utcnow)
    hosted_events = relationship(
        "Event", back_populates="host", foreign_keys="[Event.host_id]"
    )

    host = relationship("User", back_populates="hosted_events", foreign_key=[host_id])
    participants = relationship("EventParticipant", back_populated="event")
