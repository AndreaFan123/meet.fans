# backend/app/schemas/event_participant.py
from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from app.models.event_participant import ParticipationStatus


class EventParticipantBase(BaseModel):
    """Base schema with common EventParticipant attributes"""

    notes: Optional[str] = None


class EventParticipantCreate(EventParticipantBase):
    """Schema for registering for an event"""

    event_id: int


class EventParticipantUpdate(BaseModel):
    """Schema for updating participation status"""

    status: Optional[ParticipationStatus] = None
    notes: Optional[str] = None


class EventParticipantInDBBase(EventParticipantBase):
    """Schema for participation data from the database"""

    id: int
    user_id: int
    event_id: int
    status: ParticipationStatus
    registration_datetime: datetime
    waitlist_position: Optional[int] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class EventParticipant(EventParticipantInDBBase):
    """Schema for participation data returned to clients"""

    pass


class EventParticipantDetail(EventParticipant):
    """Detailed participation info including user and event details"""

    user: "User"  # Forward reference
    event: "Event"  # Forward reference
