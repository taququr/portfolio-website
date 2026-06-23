"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { animate } from "framer-motion";
import cleanHTML from "@/lib/termly-data";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Hide if within 100px of the very top or Hide if within 50px of the absolute bottom
      const isAtTop = scrollTop < 100;
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;

      if (isAtTop || isAtBottom) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6, // Adjust this number (in seconds) to speed it up or slow it down
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <main className="flex flex-col gap-8 max-w-full md:max-w-7xl mx-auto py-12 px-6 relative">
      <Button asChild variant="outline" className="w-fit">
        <Link href="/">&larr; Back to Home</Link>
      </Button>

      <Button
        onClick={scrollToTop}
        variant="outline"
        className={`size-10 fixed bottom-4 right-4 md:bottom-32 md:right-72 z-50 transition-all duration-300 transform ${
          isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp />
      </Button>

      <div
        className="prose prose-slate dark:prose-invert max-w-none font-sans"
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />

      {isMounted && (
        <Button asChild variant="outline" className="w-fit">
          <Link href="/">I understand & Return to Home</Link>
        </Button>
      )}
    </main>
  );
}
