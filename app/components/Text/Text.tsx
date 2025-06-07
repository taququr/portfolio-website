import { twMerge } from "tailwind-merge";

export default function Text({
  children,
  size = "base",
  weight = "regular",
  appearance = "sans",
  className = "",
}: Readonly<{
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  appearance?: "sans" | "mono";
  className?: string;
}>) {
  const sizeList = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const weightList = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const appearanceList = {
    sans: "font-[family-name:var(--font-red-hat-text)]",
    mono: "font-[family-name:var(--font-red-hat-mono)]",
  };

  className = twMerge(sizeList[size], weightList[weight], appearanceList[appearance], className);
  return <p className={className}>{children}</p>;
}
