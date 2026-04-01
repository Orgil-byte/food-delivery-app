type User = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
};

export const signIn = async (user: User): Promise<SignInResponse> => {
  const response = await fetch("/api/user/auth", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  console.log("status:", response.status, "data:", JSON.stringify(data)); // add this

  if (!response.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data as SignInResponse;
};
