import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backend Atelier | Operational clarity for modern brands",
  description:
    "Backend Atelier helps founder-led brands build elegant systems, Shopify clarity, and operational structure for serious growth.",
  icons: {
    icon: "/logo-icon-dark.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
