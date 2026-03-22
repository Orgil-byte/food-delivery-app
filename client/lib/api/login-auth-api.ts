export const loginAuthApi = async () => {
  const authData = await fetch("http://localhost:3001/users/login");
  const theAuthLogin = await authData.json();

  return theAuthLogin;
};
