import NextLink from "next/link";
import clsx from "clsx";
import {Input} from "../ui/input";
import UserInfo from "./user-info";



export const AppNavbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      className="dark:bg-dark-800"
      placeholder="Search..."
      type="search"
    />
  );

  return (
    <>
      <nav className="flex justify-end h-16 border-b items-center px-4 space-x-2 sticky top-0 backdrop-blur-sm">
        <div className="hidden lg:flex">{searchInput}</div>
        <div className="hidden md:flex">
          <UserInfo />
        </div>
      </nav>
    </>
  );
};
