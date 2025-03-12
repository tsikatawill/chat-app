import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BuildSync",
  description:
    "A collaborative chat platform for developers, designers, and product teams to connect, discuss, and build together seamlessly.",
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

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
