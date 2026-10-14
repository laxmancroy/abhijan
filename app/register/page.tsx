// app/register/page.tsx
"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  // ১. ইউজারের ইনপুটগুলো ধরে রাখার জন্য স্টেট (States to hold user input)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // ২. ফর্ম সাবমিট করলে এই ফাংশনটি কাজ করবে (Runs when form is submitted)
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    await signUp.email(
      {
        name,
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setLoading(true); // বাটন লোডিং মোডে নেওয়া হচ্ছে (Show loading state)
        },
        onSuccess: () => {
          // রেজিস্ট্রেশন সফল হলে সরাসরি ড্যাশবোর্ডে নিয়ে যাবে (Redirect on success)
          router.push("/dashboard");
          router.refresh();
        },
        onError: (ctx) => {
          // কোনো ভুল হলে (যেমন ইমেইল আগে থেকেই থাকলে) এরর দেখাবে (Display error message)
          setError(ctx.error.message);
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md border"
      >
        <h1 className="text-2xl font-bold text-center">নতুন অ্যাকাউন্ট খুলুন (Register)</h1>

        {error && (
          <div className="rounded bg-red-100 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="আপনার নাম লিখুন"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border p-2"
            minLength={8}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "Sign Up"}
        </button>

        <p className="text-center text-sm text-gray-600">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link href="/login" className="text-blue-600 font-medium underline">
            Login করুন
          </Link>
        </p>
      </form>
    </div>
  );
}