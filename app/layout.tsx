import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/header";

const inter = Jura({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Scott",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
