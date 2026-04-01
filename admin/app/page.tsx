"use client";

import { signIn } from "@/lib/services/auth/sign-in";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onChangeEmailLog: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const onChangePasswordLog: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const logUser = async () => {
    const user = {
      email,
      password,
    };

    try {
      await signIn(user);
      router.push("/dashboard/Dishes");
    } catch (error) {
      console.log(error);
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
        <input
          onChange={onChangeEmailLog}
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="email"
          placeholder="email"
        />
        <input
          onChange={onChangePasswordLog}
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="password"
          placeholder="password"
        />
        <button onClick={logUser} className="bg-red-400 w-fit">
          Sign in
        </button>
        <Link href={"/signUp"}>Sign up?</Link>
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
