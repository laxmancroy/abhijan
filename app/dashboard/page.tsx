// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

// এই ১টি লাইন যোগ করলেই এরর সমাধান হয়ে যাবে (Add this single line to fix the error)
export const instant = false;

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 shadow-sm text-center">
        <h1 className="text-2xl font-bold">স্বাগতম, {session.user.name}!</h1>
        <p className="mt-2 text-gray-600">আপনার ইমেইল: {session.user.email}</p>
        <LogoutButton />
      </div>
    </div>
  );
}