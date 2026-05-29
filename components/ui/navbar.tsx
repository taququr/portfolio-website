"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const isStudioPage = pathname === "/studio" || pathname?.startsWith("/studio/");
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    !isStudioPage && (
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <nav className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-background/80 backdrop-blur-md shadow-sm hover:shadow-lg duration-500">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <div className="h-4 w-px bg-border mx-1" />

          <Button
            variant="ghost"
            size="icon"
            className="md:h-8 md:w-8 h-7 w-7 rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="md:h-[1.2rem] md:w-[1.2rem] h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
            <Moon className="absolute md:h-[1.2rem] md:w-[1.2rem] h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    )
  );
}
