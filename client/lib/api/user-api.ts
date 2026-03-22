export const usersApi = async () => {
  const usersData = await fetch("http://localhost:3001/users");
  const theUser = await usersData.json();

  return theUser;
};
