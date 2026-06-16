"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/themeToggle";

export function Navbar() {
  const pathname = usePathname();
  const isStudioPage = pathname === "/studio" || pathname?.startsWith("/studio/");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    !isStudioPage && (
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto font-mono">
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

          <ThemeToggle />
        </nav>
      </div>
    )
  );
}
