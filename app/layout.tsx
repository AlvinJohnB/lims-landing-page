import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Lab Trak Pro - Modern LIMS Software",
  description:
    "Modern LIMS software for local diagnostic labs. Manage test records, track orders, and streamline your lab with a fast, secure system.",
  openGraph: {
    title: "Lab Trak Pro - Modern LIMS Software",
    description: "Modern LIMS software for local diagnostic labs.",
    url: "https://mern-stack-lis.vercel.app/",
    siteName: "Lab Trak Pro",
    // images: [
    //   {
    //     url: "/placeholder.jpg", // or your logo/image path
    //     width: 1200,
    //     height: 630,
    //     alt: "Lab Trak Pro",
    //   },
    // ],
    locale: "en_PH",
    type: "website",
  },
  // You can add more fields like twitter, icons, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
