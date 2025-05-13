from app.schemas.user import User, UserCreate, UserUpdate, UserLogin, UserWithStats
from app.schemas.event import (
    Event,
    EventCreate,
    EventUpdate,
    EventWithHost,
    EventWithParticipantInfo,
)
from app.schemas.event_participant import (
    EventParticipant,
    EventParticipantCreate,
    EventParticipantUpdate,
    EventParticipantDetail,
)

from pydantic import update_forward_refs

User.update_forward_refs()
Event.update_forward_refs()
EventWithHost.update_forward_refs()
EventParticipantDetail.update_forward_refs()
