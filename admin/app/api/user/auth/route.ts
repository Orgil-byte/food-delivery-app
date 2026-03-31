import { cookies } from "next/headers";
import { SignInResponse } from "@/lib/services/auth/sign-in";

export const POST = async (request: Request) => {
  const credentials = await request.json();

  const cookieStore = await cookies();

  const response = await fetch("http://localhost:3001/users/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = (await response.json()) as SignInResponse;

  cookieStore.set("token", data.accessToken);

  return new Response(data.accessToken);
};
