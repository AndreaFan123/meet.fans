from datetime import datetime
from sqlalchemy import Column, String, Integer, Text, Datetime, Boolean, Foreignkey, Enum
from sqlalchemy.orm import relationship
from app.db.base_class import Base

import enum


class EventType(enum.Enum):
    CONCERT = 'concert'
    FAN_MEETING = 'fan_meeting'
    ONLINE_STREAM = 'online_stream'
    ALBUM_RELEASE = 'album_release'
    GROUP_ORDER = 'group_order'
    CAFE_EVENT = 'cafe_event'
    OTHER = 'other'


class EventStatus(enum.Enum):
    DRAFT = 'draft'
    PUBLISHED = 'published'
    ONGOING = 'ongoing'
    COMPLETED = 'completed'
    CANCELLED = 'cancelled'


class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False, index=True)
    description = Column(Text, nullable=True)

    event_type = Column(Enum(EventType), nullable=False)
    is_online = Column(Boolean, default=False)
    location = Column(String(255), nullable=True)

    capacity = Column(Integer, nullable=True)
    current_participants_count = Column(Integer, default=0, nullable=False)
    is_full = Column(Boolean, default=False)

    start_datetime = Column(DateTime, nullable=False, index=True)
    end_datetime = Column(DateTime, nullable=True)
    registration_deadline = Column(DateTime, nullable=True)

    host_id = Column(Integer, Foreignkey('user.id'),
                     nullable=False, index=True)
    # Frontend will need to provide fallback image if no cover image
    cover_img = Column(String(255), nullbale=True)
    artist_name = Column(String(255), nullable=True, index=True)
    status = Column(Enum(EventStatus),
                    default=EventStatus.DRAFT, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow,
                        onupdate=datetime.utcnow)
    host = relationship('User', foreign_key=[
                        host_id], back_populates='hosted_events')
