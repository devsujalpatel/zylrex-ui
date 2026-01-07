"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import Button from "./button";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const handleCLick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="w-full h-16 px-8 flex justify-between items-center bg-background shadow-raised">
      <h1 className="text-2xl font-bold">Zylrex UI</h1>
      <Button onClick={handleCLick} size="icon" shape={"circle"}>
        {theme === "light" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-black" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-primary" />
        )}
      </Button>
    </nav>
  );
};
