/* eslint-disable @next/next/no-head-element */
import { Metadata, Viewport } from "next";


import clsx from "clsx";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NextTopLoader from "nextjs-toploader";
import { fontSans } from "@/config/fonts";
import SideBar from "../sider-bar/side-bar";
import { Providers } from "../providers";
import CommonLayout from "../common/common-layout";
import LandingPage from "../landing-page/landing";
import {AppNavbar} from "../common/navbar";

export const metadata: Metadata = {
  title: {
    default: "moon-light",
    template: `%s - moon-light`,
  },
  description: "moon-light",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader showSpinner={false} />
        <Providers
        >
          <>
            {isLoggedIn ? (
              <div className="flex h-screen w-screen">
                <SideBar />
                <main className="flex-1 overflow-scroll">
                  <AppNavbar />
                  <CommonLayout>{children}</CommonLayout>
                </main>
              </div>
            ) : (
              <LandingPage />
            )}
          </>
        </Providers>
      </body>
    </html>
  );
}
