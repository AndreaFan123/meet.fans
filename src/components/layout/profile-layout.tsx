"use client";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
