import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Skeleton",
  description: "Frontend interview skeleton project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
