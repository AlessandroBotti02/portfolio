import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alessandro Botti — Data Consultant & App Builder",
  description: "Management & Operations Consultant at Inema. Data management, app development, process simulation and AI integrations.",
  openGraph: {
    title: "Alessandro Botti",
    description: "Data consultant and app builder — I help companies work better with their own data.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
