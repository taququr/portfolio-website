"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isStudioPage = pathname === "/studio" || pathname?.startsWith("/studio/");

  // If you are inside the studio, completely unmount the footer JSX
  if (isStudioPage) return null;

  return (
    <footer className="w-full border-t border-muted-foreground/10 py-6 px-4 mt-auto font-mono text-[11px] text-muted-foreground">
      <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} // PORTFOLIO_WEBSITE_V3</div>
        <div className="flex items-center gap-6">
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GITHUB
          </a> */}
          <a
            href="https://www.linkedin.com/in/taqie-fadlillah/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LINKEDIN
          </a>
          <Link
            href="/studio"
            className="text-muted-foreground/30 hover:text-sky-700 dark:hover:text-sky-400 transition-colors duration-300 tracking-widest hidden md:block"
          >
            [<span className="group-hover:text-foreground">SYS_ADMIN</span>]
          </Link>
        </div>
      </div>
    </footer>
  );
}
