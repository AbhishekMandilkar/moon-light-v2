"use client";
import React from "react";
import { getAvailableTabs } from "./side-bar.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Branding from "../common/branding";
import { Button } from "../ui/button";

function SideBar() {
  const pathname = usePathname();
  const tabs = getAvailableTabs();
  const isActive = (path: string) => {
    return pathname === path ? "bg-default-200" : "";
  };

  return (
    <aside className="min-w-[200px] p-2 border-r">
      <div className="px-2 py-3 mx-auto flex-1 flex justify-center">
        <Branding />
      </div>
      <div className="flex flex-col mt-2">
        {tabs.map((tab) => (
          <Button
            variant={isActive(tab.path) ? "secondary" : "ghost"}
            className="w-full justify-start mb-2"
            key={tab.path}
            asChild
          >
            <Link href={tab.path}>
              <tab.icon size={20} className="mr-2" />
              <span>{tab.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
