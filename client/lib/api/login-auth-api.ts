import { backEndUrl } from "@/hooks/env-url";

export const loginAuthApi = async () => {
  const authData = await fetch(`${backEndUrl}/users/login`);
  const theAuthLogin = await authData.json();

  return theAuthLogin;
};
