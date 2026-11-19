// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SignOutButton from "./logout-button";

export const instant = false;

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 shadow-sm text-center">
        <h1 className="text-2xl font-bold">স্বাগতম, {session.user.name}!</h1>
        <p className="mt-2 text-gray-600">আপনার ইমেইল: {session.user.email}</p>
        <SignOutButton />
      </div>
    </div>
  );
};

export default DashboardPage;
