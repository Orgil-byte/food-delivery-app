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
      <div className="w-104 h-79 flex flex-col border border-amber-500 gap-10">
        <input
          className="border border-black"
          type="email"
          placeholder="email"
          onChange={onChangeEmail}
        />
        <input
          className="border border-black"
          type="password"
          placeholder="password"
          onChange={onChangePassword}
        />
        <input
          className="border border-black"
          type="text"
          placeholder="your name"
          onChange={onChangeName}
        />
        <input
          className="border border-black"
          type="text"
          placeholder="role"
          onChange={onChangeRole}
        />
        <button onClick={saveUser} className="bg-red-400 w-fit">
          Sign up
        </button>
      </div>
      <img
        className="w-214 h-226 rounded-2xl object-cover"
        src="/images/login.jpg"
        alt="img"
      />
    </div>
  );
};

export default Main;
