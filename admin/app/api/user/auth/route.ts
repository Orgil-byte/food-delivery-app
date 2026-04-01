import { cookies } from "next/headers";
import { SignInResponse } from "@/lib/services/auth/sign-in";

export const POST = async (request: Request) => {
  const credentials = await request.json();

  if (!credentials.email || !credentials.password) {
    return Response.json(
      { error: "Email and password are required" },
      { status: 400 },
    );
  }

  const cookieStore = await cookies();

  const response = await fetch("http://localhost:3001/users/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = (await response.json()) as SignInResponse;

  if (!response.ok || !data.accessToken) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  cookieStore.set("token", data.accessToken, {
    httpOnly: true,
    path: "/",
  });

  return Response.json({ accessToken: data.accessToken });
};
