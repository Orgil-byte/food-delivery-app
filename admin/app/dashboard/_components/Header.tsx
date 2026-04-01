import { cookies } from "next/headers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
  email: string;
  phoneNumber: string | null;
};

const getUser = async () => {
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

export const Header = async () => {
  const user = await getUser();

  return (
    <div className="border-red-500 border flex justify-end">
      <div className="flex flex-col items-center justify-between">
        <Avatar className="text-black">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
