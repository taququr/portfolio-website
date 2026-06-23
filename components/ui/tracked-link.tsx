"use client"; // Marks this specifically as a Client Component

import Link from "next/link";
import { track } from "@/lib/analytics";
import { ComponentProps } from "react";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  eventName: string;
  properties?: Record<string, any>;
}

export function TrackedLink({ eventName, properties, children, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        // 1. Run your tracking logic safely on the client side
        track(eventName, properties);

        // 2. Execute any optional onClick passed down
        if (onClick) onClick(e);
      }}
    >
      {children}
    </Link>
  );
}
