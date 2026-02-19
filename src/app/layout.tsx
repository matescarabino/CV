import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAssetPath } from "@/utils/path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV - Scarabino",
  description: "Mateo Scarabino - Ingeniero en sistemas informáticos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script defer src={getAssetPath("/assets/fontawesome/js/all.min.js")}></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
