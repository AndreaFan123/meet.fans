# backend/app/db/schema.py

"""
Database Schema for MEET.FANS Application

This file documents the database schema and relationships between models.
It serves as a reference and is not executed directly.
"""

"""
User Model
----------
Stores user account information and authentication details.

Fields:
- id (PK): Integer, primary key
- email: String(255), unique, indexed
- username: String(50), unique, indexed
- hashed_password: String(255)
- is_active: Boolean, default=True
- profile_image: String(255), nullable
- created_at: DateTime
- updated_at: DateTime

Relationships:
- hosted_events: One-to-Many with Event (User hosts many Events)
- event_participations: One-to-Many with EventParticipant (User participates in many Events)
"""

"""
Event Model
-----------
Stores information about K-pop events.

Fields:
- id (PK): Integer, primary key
- title: String(255), indexed
- description: Text, nullable
- event_type: Enum(EventType)
- is_online: Boolean, default=False
- location: String(255), nullable
- capacity: Integer, nullable (null means unlimited)
- current_participants_count: Integer, default=0
- is_full: Boolean, default=False
- start_datetime: DateTime, indexed
- end_datetime: DateTime, nullable
- registration_deadline: DateTime, nullable
- host_id (FK): Integer, references User.id, indexed
- cover_image: String(255), nullable
- artist_name: String(255), nullable, indexed
- status: Enum(EventStatus), default=DRAFT
- created_at: DateTime
- updated_at: DateTime

Relationships:
- host: Many-to-One with User (Event has one host)
- participants: One-to-Many with EventParticipant (Event has many participants)

Enums:
- EventType: CONCERT, FAN_MEETING, ONLINE_STREAM, ALBUM_RELEASE, GROUP_ORDER, CAFE_EVENT, OTHER
- EventStatus: DRAFT, PUBLISHED, ONGOING, COMPLETED, CANCELLED
"""

"""
EventParticipant Model
----------------------
Manages registrations of users for events, including waitlist functionality.

Fields:
- id (PK): Integer, primary key
- user_id (FK): Integer, references User.id, indexed
- event_id (FK): Integer, references Event.id, indexed
- status: Enum(ParticipationStatus), default=REGISTERED
- registration_datetime: DateTime, default=utcnow
- notes: Text, nullable
- waitlist_position: Integer, nullable
- created_at: DateTime
- updated_at: DateTime

Relationships:
- user: Many-to-One with User (ParticipantEvent belongs to one User)
- event: Many-to-One with Event (ParticipantEvent belongs to one Event)

Constraints:
- UniqueConstraint('user_id', 'event_id') - A user can only register once per event

Enums:
- ParticipationStatus: REGISTERED, CONFIRMED, ATTENDED, CANCELLED, WAITLISTED
"""

"""
ER Diagram (ASCII)
-----------------

+----------------+                 +----------------+                 +----------------------+
|      User      |                 |      Event     |                 |   EventParticipant   |
+----------------+                 +----------------+                 +----------------------+
| id             |<--+             | id             |<--+             | id                   |
| email          |    \            | title          |    \            | user_id ------------>|
| username       |     \           | description    |     \           | event_id ----------->|
| hashed_pass... |      \          | event_type     |      \          | status               |
| is_active      |       +---------|  host_id       |       +---------|  registration_date.. |
| profile_image  |                 | is_online      |                 | notes                |
| created_at     |                 | location       |                 | waitlist_position    |
| updated_at     |                 | capacity       |                 | created_at           |
+----------------+                 | current_part.. |                 | updated_at           |
        |                          | is_full        |                 +----------------------+
        |                          | start_datetime |                           |
        |                          | end_datetime   |                           |
        |                          | reg_deadline   |                           |
        |                          | cover_image    |                           |
        |                          | artist_name    |                           |
        |                          | status         |                           |
        |                          | created_at     |                           |
        |                          | updated_at     |                           |
        |                          +----------------+                           |
        |                                  |                                    |
        |                                  |                                    |
        v                                  v                                    v
+----------------+                 +----------------+                 +----------------------+
| hosted_events  |                 | host           |                 | user                 |
| event_parti... |---------------->| participants   |---------------->| event                |
+----------------+                 +----------------+                 +----------------------+

"""

"""
Database Access Patterns
-----------------------

Common queries the application will perform:

1. Authentication:
   - Find user by email (for login)
   - Create new user (registration)

2. User Profile:
   - Get user details
   - Get events hosted by a user
   - Get events a user is participating in

3. Event Management:
   - Create new event
   - Update event details
   - Change event status
   - Get event details with host info
   - Get event participants

4. Event Discovery:
   - Get upcoming events (filtered by date, artist, etc.)
   - Get events with available capacity
   - Search events by title, artist, location

5. Participation:
   - Register user for event
   - Update participation status
   - Check if user is registered for event
   - Get user's position on waitlist
   - Promote users from waitlist when spots open
"""
