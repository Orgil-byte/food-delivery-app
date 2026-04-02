import { cookies } from "next/headers";

type User = {
  name: string;
  email: string;
  phoneNumber: string | null;
};

export const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://localhost:3001/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const user = (await response.json()) as User;
  return user;
};
