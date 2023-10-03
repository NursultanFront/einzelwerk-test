import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const arboriaBook = localFont({
  src: "./Arboria-Book.woff2",
  variable: "--font-arboria-book",
});
const arboriaMedium = localFont({
  src: "./Arboria-Medium.woff2",
  variable: "--font-arboria-medium",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(arboriaBook.className, arboriaMedium.className)}>
        {children}
      </body>
    </html>
  );
}
