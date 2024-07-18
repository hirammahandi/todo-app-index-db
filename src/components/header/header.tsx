"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "../ui/button";

export const Header = () => {
  const { setTheme, theme } = useTheme();

  const handleSetTheme = (selectedTheme: "light" | "dark") => () =>
    setTheme(selectedTheme);

  return (
    <header className="p-4 shadow bg-primary-foreground">
      <nav className="flex items-center justify-between">
        <Image alt="Todo Logo" src="/todo-logo.png" height={50} width={50} />
        <ul>
          <li>
            {theme === "light" ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSetTheme("dark")}
              >
                <MoonIcon />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSetTheme("light")}
              >
                <SunIcon />
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
