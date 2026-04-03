// admin/app/page.tsx
"use client";

import { signIn } from "@/lib/services/auth/sign-in";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onChangeEmailLog: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const onChangePasswordLog: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const logUser = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signIn({ email, password });
      router.push("/dashboard/Dishes");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center gap-20">
      <div className="w-104 flex flex-col gap-6">
        <div className="pt-15 flex flex-col gap-1">
          <p className="font-semibold text-[24px]">Log in</p>
          <p className="text-[18px] text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </p>
        )}
        <input
          onChange={onChangeEmailLog}
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="email"
          placeholder="Enter your email address"
          value={email}
        />
        <input
          onChange={onChangePasswordLog}
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="password"
          placeholder="Password"
          value={password}
        />
        <button
          onClick={logUser}
          disabled={loading}
          className="bg-zinc-900 w-full text-center cursor-pointer px-4 py-1 rounded text-white disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <div className="flex gap-3 items-center w-full justify-center">
          <p className="text-[#71717A] text-[17px]">Don’t have an account?</p>
          <Link className="text-[#2563EB]" href={"/signUp"}>
            Sign up
          </Link>
        </div>
      </div>
      <img
        className="w-214 h-226 rounded-2xl object-cover"
        src="/images/login.jpg"
        alt="img"
      />
    </div>
  );
};

export default LoginPage;
