"use client";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { Key } from "react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from  "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LogOutIcon, Moon, Sun } from "lucide-react";

function UserInfo() {
  const { user } = useKindeBrowserClient();
  console.log(user?.picture);
  const avatarName = user?.given_name?.charAt(0);
  const fullName = `${user?.given_name} ${user?.family_name}`;
  const email = user?.email || "";
  const picture = user?.picture || "";
  const { theme, setTheme } = useTheme();

  const onActionPress = (key: Key) => {
    switch (key) {
      case "settings":
        console.log("Settings");
        break;
      case "logout":
        break;
      case "theme-switch":
        setTheme(theme === "light" ? "dark" : "light");
        break;
    }
  };

  const menuIconClassnames = "mr-2";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-10 w-10 border-1 flex justify-center items-center">
            <AvatarImage src={picture} alt={avatarName} />
            <AvatarFallback>{avatarName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{fullName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              onActionPress("theme-switch");
            }}
          >
            {theme === "light" ? (
              <Moon size={16} className={menuIconClassnames} />
            ) : (
              <Sun size={16} className={menuIconClassnames} />
            )}
            <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutLink>
          <DropdownMenuItem>
            <LogOutIcon size={16} className={menuIconClassnames} />
            <span>Log out</span>
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserInfo;
