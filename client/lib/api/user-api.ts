import { backEndUrl } from "@/hooks/env-url";

export const usersApi = async () => {
  const usersData = await fetch(`${backEndUrl}/users`);
  const theUser = await usersData.json();

  return theUser;
};
