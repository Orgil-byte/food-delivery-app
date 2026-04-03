"use client";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { backEndUrl } from "@/hooks/env-url";

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const router = useRouter();

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  const onChangeRole: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRole(event.target.value);
  };

  const saveUser = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
      role: role,
    };

    try {
      await fetch(`${backEndUrl}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center gap-20">
      <div className="w-104 flex flex-col gap-6">
        <div className="pt-15 flex flex-col gap-1">
          <p className="font-semibold text-[24px]">Create your account</p>
          <p className="text-[18px] text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="text"
          placeholder="Enter your name"
          onChange={onChangeName}
        />
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="email"
          placeholder="Enter your email address"
          onChange={onChangeEmail}
        />
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
        />
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="text"
          placeholder="role"
          onChange={onChangeRole}
        />
        <button
          onClick={saveUser}
          className="bg-zinc-900 w-full text-center cursor-pointer px-4 py-1 rounded text-white disabled:opacity-50"
        >
          Create account
        </button>
        <div className="flex gap-3 items-center w-full justify-center">
          <p className="text-[#71717A] text-[17px]">Already have an account?</p>
          <Link className="text-[#2563EB]" href={"/"}>
            Log in
          </Link>
        </div>
      </div>
      <img
        className="max-w-214 w-full aspect-107/113 rounded-2xl object-cover"
        src="/images/login.jpg"
        alt="img"
      />
    </div>
  );
};

export default Main;
