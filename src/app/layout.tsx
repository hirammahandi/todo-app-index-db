import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import ThemeProvider from "@/components/theme-provider";
import { DynamicHeader } from "@/components/header/dynamic-header";

// CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App with IndexDB",
  description:
    "Todo App is a simple todo app that uses IndexedDB as a database",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicHeader />
          <main className="container">{children}</main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
