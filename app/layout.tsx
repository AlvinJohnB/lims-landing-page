import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab Trak - A Modern Laboratory Information Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
