"use client";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

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
      await fetch("http://localhost:3001/users", {
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
          type="email"
          placeholder="Enter your email address"
          onChange={onChangeEmail}
        />
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="password"
          placeholder="password"
          onChange={onChangePassword}
        />
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="text"
          placeholder="your name"
          onChange={onChangeName}
        />
        <input
          className="border h-9 w-full rounded-md py-2 px-3 border-zinc-200"
          type="text"
          placeholder="role"
          onChange={onChangeRole}
        />
        <button onClick={saveUser} className="bg-red-400 w-fit">
          Sign up
        </button>
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
