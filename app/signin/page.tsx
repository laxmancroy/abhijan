"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      await signIn.social(
        {
          provider: "google",
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            setLoading(false);
            setError(
              ctx.error.message || "Something Went Wrong! Try Again Later.",
            );
          },
        },
      );
    } catch {
      setLoading(false);
      setError("Network Error!");
    }
  };
  return (
    <div className="flex items-center justify-center flex-1 w-full">
      <div className="bg-card max-w-md w-full px-6 py-6 rounded-lg border border-bdr">
        <h2 className="text-2xl font-bold text-center pb-6">Sign In</h2>
        {error && <p className="text-red-600 py-3 px-2">{error}</p>}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="bg-primary text-primary-fg w-full py-2 rounded-lg hocus:bg-primary-hocus hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Redirecting to Google..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
