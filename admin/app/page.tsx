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

      router.push("/Dishes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center gap-20">
      <div className="w-104 h-79 flex flex-col border border-amber-500 gap-10">
        <input
          onChange={onChangeEmailLog}
          className="border border-black"
          type="email"
          placeholder="email"
        />
        <input
          onChange={onChangePasswordLog}
          className="border border-black"
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
