// app/dashboard/logout-button.tsx
"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // লগআউট শেষে লগইন পেজে পাঠিয়ে দেবে
          router.refresh();
        },
      },
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Logout (লগআউট)
    </button>
  );
}