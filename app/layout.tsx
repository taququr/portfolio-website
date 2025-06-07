import type { Metadata } from "next";
import { Red_Hat_Text, Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Taqie Fadlillah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatText.variable} ${redHatMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
