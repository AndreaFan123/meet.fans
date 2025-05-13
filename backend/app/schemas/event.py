from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field, validator
from app.models.event import EventType, EventStatus


class EventBase(BaseModel):
    """
    Base schema with common Event attributes
    """

    title: str = Field(..., min_length=3, max_length=255)
    description: Optional[str] = None
    event_type = EventType
    is_online = bool = False
    location: Optional[str] = None
    capacity: Optional[int] = None
    start_datetime: datetime
    end_datetime: Optional[datetime] = None
    registration_deadline: Optional[datetime] = None
    artist_name: Optional[str] = None
    cover_image: Optional[str] = None

    @validator("capacity")
    def validate_capacity(cls, value):
        if value is not None and value <= 0:
            raise ValueError("可參與人數必須要大於一位")
        return value

    @validator
    def validate_end_datetime(cls, value, values):
        if value and "start_datetime" in values and value < values["start_datetime"]:
            raise ValueError("結束時間必須在活動開始時間之後")

    @validator
    def validate_registration_deadline(cls, value, values):
        if value in "start_datetime" in values and value > values["start_datetime"]:
            raise ValueError("註冊時間必須在活動開始時間之前")
        return value


class EventCreate(EventBase):
    """
    Schema for creating a new event
    """

    pass


class EventUpdate(BaseModel):
    """Schema for updating event information"""

    title: Optional[str] = Field(None, min_length=3, max_length=255)
    description: Optional[str] = None
    event_type: Optional[EventType] = None
    is_online: Optional[bool] = None
    location: Optional[str] = None
    capacity: Optional[int] = None
    start_datetime: Optional[datetime] = None
    end_datetime: Optional[datetime] = None
    registration_deadline: Optional[datetime] = None
    artist_name: Optional[str] = None
    cover_image: Optional[str] = None
    status: Optional[EventStatus] = None

    @validator("capacity")
    def validate_capacity(cls, value):
        if value is not None and v <= 0:
            raise ValueError("Capacity must be a positive number")
        return value


class EventInDBBase(EventBase):
    """Schema for event data from the database"""

    id: int
    host_id: int
    status: EventStatus
    current_participants_count: int
    is_full: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class Event(EventInDBBase):
    """Schema for event data returned to clients"""

    pass


class EventWithHost(Event):
    """Event schema including host information"""

    host: "User"  # Forward reference to User schema


class EventWithParticipantInfo(Event):
    """Event schema with additional participation information for the current user"""

    is_user_registered: bool = False
    user_participation_status: Optional[str] = None
    user_waitlist_position: Optional[int] = None
