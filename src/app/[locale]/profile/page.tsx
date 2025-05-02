import { ProfileHeader } from "@/components/profile/profile-header";
import { EventsList } from "@/components/profile/event-list";
import { ProfileLayout } from "@/components/layout/profile-layout";
import { userData, events } from "@/mock/data";
// import { MobileSidebar } from "@/components/ui/mobile-sidebar";

export default function ProfilePage() {
  return (
    <>
      <div className="flex border-b items-center p-4 md:hidden">
        <h1 className="ml-4 text-lg font-medium">Profile</h1>
      </div>
      <ProfileLayout>
        <div className="container max-w-5xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
          <div className="space-y-0.5">
            <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          </div>

          <div className="divider my-6" />

          <ProfileHeader initialData={userData} />

          <div className="my-8">
            <EventsList events={events} />
          </div>
        </div>
      </ProfileLayout>
    </>
  );
}
