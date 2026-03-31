type User = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
};

export const signIn = async (user: User) => {
  const response = await fetch("/api/user/auth", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = (await response.json()) as SignInResponse;

  return data;
};
