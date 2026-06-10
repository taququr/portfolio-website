import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getImageDimensions(imageAsset: any) {
    const ref = imageAsset?.asset?._ref;
    if (!ref) return { width: 1200, height: 900 };

    const [, , dimensions] = ref.split("-");
    const [width, height] = dimensions.split("x").map(Number);

    return { width, height };
}

export const isFrontend = process.env.NODE_ENV === "development";
