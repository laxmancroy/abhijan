"use client";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
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
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
        },
        onError: (ctx) => {
          setError(ctx.error.message || "Wrong email or password");
          setLoading(false);
        },
      },
    );
  };
  return (
    <div className="flex items-center justify-center my-20">
      <div className="max-w-md w-full bg-card text-card-foreground rounded-xl px-6 py-4 border border-border">
        <form onSubmit={handleSignup}>
          <h2 className="text-3xl text-center font-bold pt-2 pb-4">Sign Up</h2>
          <label className="block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name?"
            className="block w-full outline-0 border border-gray-200 focus:border-button placeholder:text-sm rounded-xl px-2 py-3"
          />
          <label className="block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email?"
            className="block w-full outline-0 border border-gray-200 focus:border-button placeholder:text-sm rounded-xl px-2 py-3"
          />
          <label className="block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
            className="block w-full outline-0 border border-gray-200 focus:border-button placeholder:text-sm rounded-xl px-2 py-3    "
          />
          <p className="text-red-500 pt-2 pl-3">{error}</p>
          <input
            type="submit"
            value={loading ? "Sign Up...." : "Sign Up"}
            className="bg-button text-button-foreground w-full text-center py-3 my-3 rounded-xl hover:cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
