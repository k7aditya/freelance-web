"use client";

import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../theme-provider";

function Homeheader() {
  const { resolvedTheme } = useTheme();
  return (
    <header className={`w-full fixed z-100 shadow-lg px-4 py-3 sm:px-8 sm:py-4 ${resolvedTheme === "dark" ? "bg-background backdrop-blur-lg" : "bg-white border-black"} transition-colors duration-144 border-b-1`}>
      <div className=" mx-auto flex items-center justify-between">
        {/* Brand + Navigation */}
          {/* Brand Name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image 
                alt="FreeLancBase logo" 
                src="https://res.cloudinary.com/dipugmopt/image/upload/v1753371311/ChatGPT_Image_Jul_24_2025_09_04_04_PM_odujhi.png"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              FreeLanceBase
            </h1>
          </div>


        {/* Auth Section */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="redirect" forceRedirectUrl="/select">
              <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors duration-200">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/select">
              <Button
                variant="outline"
                className="cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Dashboard
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                  },
                },
              }}
            />
          </SignedIn>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Homeheader;