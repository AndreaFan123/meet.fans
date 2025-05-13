from datetime import datetime
import enum
from sqlalchemy import (
    Column,
    Integer,
    ForeignKey,
    DateTime,
    Enum,
    Text,
    UniqueConstraint,
)
from sqlalchemy.orm import relationship
from app.db.base_class import Base


class ParticipationStatus(enum.Enum):
    REGISTER = ("register",)
    CONFIRMED = "confirmed"
    ATTENDED = "attended"
    CANCELLED = "cancelled"
    WAITLISTED = "waitlisted"


class EventParticipant(Base):
    __tablename__ = "event_participants"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    event_id = Column(Integer, ForeignKey("events.id"), nullable=False, index=True)

    # Participation data
    status = Column(
        Enum(ParticipationStatus),
        default=ParticipationStatus.REGISTERED,
        nullable=False,
    )
    registration_datetime = Column(DateTime, default=datetime.utcnow, nullable=False)
    notes = Column(Text, nullable=True)

    # Waitlist position (null if not waitlisted)
    waitlist_position = Column(Integer, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="event_participations")
    event = relationship("Event", back_populates="participants")

    __table_args__ = UniqueConstraint(
        "user_id", "event_id", name="unique_user_event_participation"
    )
