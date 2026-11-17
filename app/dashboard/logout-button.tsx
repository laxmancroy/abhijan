// app/dashboard/logout-button.tsx
"use client";

import { signOut } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  const [isSignOut, setIsSignOut] = useState(false);
  const [error, setError] = useState("");

  const handleSignOut = async () => {
    setIsSignOut(true);
    setError("");

    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/signin");
            router.refresh();
          },
          onError: (ctx) => {
            setIsSignOut(false);
            setError(ctx.error.message || "Sign Out Failed!");
          },
        },
      });
    } catch {
      setIsSignOut(false);
      setError("Network Error!");
    }
  };

  return (
    <button 
    type="button"
    onClick={handleSignOut}
    disabled={isSignOut}
    >{isSignOut ? "Signing Out..." : "Sign Out"}</button>
  );
};

export default SignOutButton;
