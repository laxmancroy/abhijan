// app/dashboard/logout-button.tsx
"use client";

import { signOut } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignOutButton = () =>  {
  const router = useRouter();
  const [isSignOut, setIsSignOut] = useState(false);
  const [error, setError] = useState(false);

  const handleSignOut = async () => {
    setIsSignOut(true);
    setError(false);

    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          router.refresh();
        },
        onError: (ctx) => {
          setIsSignOut(false);
          setError(ctx.error.message || "Sign Out Failed!");
        }
      },
    });
  };

  return (
    <div
      onClick={handleSignOut}
    >
      { error === false ? "Sign Out" : error}
    </div>
  );
}


export default SignOutButton;