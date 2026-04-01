import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  const response = await fetch("http://localhost:3001/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
