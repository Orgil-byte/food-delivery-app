import { Inter } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "../_components/SideBar/sideBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getUser } from "./_components/Header";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <div
      className={`flex flex-col h-dvh ${inter.variable} font-sans antialiased`}
    >
      <div className="flex justify-end w-full pr-10 pt-6 bg-neutral-100 cursor-pointer">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="w-9 h-9">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            sideOffset={4}
            className="opacity-100 w-fit p-2 bg-white"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>{user.name}</DropdownMenuItem>
              <DropdownMenuItem>{user.email}</DropdownMenuItem>
              <DropdownMenuItem>{user.phoneNumber}</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={"/"}>
                <DropdownMenuItem
                  className="bg-red-100 hover:bg-red-300 transition-colors cursor-pointer text-center"
                  variant="destructive"
                >
                  Log out
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <SidebarProvider className="w-full -mt-15">
        <SideBar />
        <main className="w-full mt-15">{children}</main>
      </SidebarProvider>
    </div>
  );
}
