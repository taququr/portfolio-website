import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/sonner";
import { SanityLive } from "@/sanity/lib/live";
import { Footer } from "@/components/ui/footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taququr Portfolio",
  description: "Personal portfolio website",
  keywords: [
    "Taqie",
    "Taququr",
    "Taqie Developer",
    "Taqie Fadlillah",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Sanity CMS",
  ],
  alternates: {
    canonical: "https://www.taququr.com",
  },
  authors: [{ name: "Taququr" }],
  creator: "Taququr",
  metadataBase: new URL("https://taququr.com"),
  openGraph: {
    title: "Taququr | Creative Frontend Developer Portfolio",
    description:
      "Explore interactive projects, engineering narratives, and cutting-edge web applications built with Next.js and Sanity.",
    url: "https://taququr.com",
    siteName: "Taququr Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Taququr Portfolio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Taququr | Software Engineer Portfolio",
  //   description: "Personal portfolio website showcasing engineering narratives and web software solutions.",
  //   images: ["/og-image.png"], // Reuses the same card asset
  //   creator: "@your_twitter_handle", // Optional
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500 bg-background min-h-screen flex flex-col`}
      >
        <NextTopLoader
          color="#38bdf8" // Sky blue matching your tags
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Toaster />
          <SanityLive onWelcome={false} />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
