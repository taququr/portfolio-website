import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

const meta: Meta<typeof Card> = {
  title: "Design System/Molecules/Card",
  component: Card,
  argTypes: {
    className: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </>
    ),
  },
};

export const MainPageProjectCard: Story = {
  args: {
    className: "cursor-pointer",
    children: (
      <>
        <CardHeader>
          <div className="flex flex-wrap gap-2 pb-2">
            {["React", "TypeScript", "TailwindCSS"].map((tag: string, index: number) => (
              <Badge key={tag + index} variant="sky" className="font-mono text-xs uppercase rounded-sm tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle>Enterprise Analytics & Storage Portal</CardTitle>
          <CardDescription>
            Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom chatbot
            interface, leveraging Google Drive API integrations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="link" className="p-0 text-sky-700 dark:text-sky-400">
            Learn more &rarr;
          </Button>
        </CardContent>
      </>
    ),
  },
};

export const ProjectListPageProjectCardRightImage: Story = {
  args: {
    className: "space-y-8 relative py-0 w-full min-h-60 md:h-52 justify-center cursor-pointer",
    children: (
      <>
        <div>
          <div className="flex flex-col min-h-60 md:h-52 relative w-full">
            <div className="w-full md:w-[65%] py-4 flex flex-col justify-between bg-background/90 md:bg-transparent z-20 relative h-full min-h-60 md:h-full md:mr-auto">
              <CardHeader className="space-y-2 flex flex-col md:text-left md:items-start">
                <span className="text-xs font-mono dark:text-muted-foreground tracking-wider">
                  {formatDate("2024-01-01")}
                </span>
                <CardTitle>Enterprise Analytics & Storage Portal</CardTitle>
                <CardDescription>
                  Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom
                  chatbot interface, leveraging Google Drive API integrations.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-1.5 md:justify-start">
                {["React", "TypeScript", "TailwindCSS"].map((tag: string, tagIndex: number) => (
                  <Badge
                    key={tag + tagIndex}
                    variant="sky"
                    className="font-mono text-xs uppercase rounded-sm tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </div>

            <div className="block absolute inset-0 w-full h-full z-10 select-none pointer-events-none">
              <div className="absolute top-0 bottom-0 w-full md:w-[45%] h-full transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0 contrast-[1.1] brightness-[0.9] dark:brightness-[0.4] group-hover:brightness-[0.8] group-hover:contrast-100 right-0">
                <div className="w-full h-full bg-muted animate-pulse" />
              </div>
              <div className="hidden md:block absolute inset-0 w-full h-full z-20 transition-colors duration-500 bg-linear-to-r from-card via-card/90 via-50% to-transparent" />
            </div>
          </div>
        </div>
      </>
    ),
  },
};

export const ProjectListPageProjectCardLeftImage: Story = {
  args: {
    className: "space-y-8 relative py-0 w-full min-h-60 md:h-52 justify-center cursor-pointer",
    children: (
      <>
        <div>
          <div className="flex flex-col min-h-60 md:h-52 relative w-full">
            <div className="w-full md:w-[65%] py-4 flex flex-col justify-between bg-background/90 md:bg-transparent z-20 relative h-full min-h-60 md:h-full md:ml-auto">
              <CardHeader className="space-y-2 flex flex-col md:text-right md:items-end">
                <span className="text-xs font-mono dark:text-muted-foreground tracking-wider">
                  {formatDate("2024-01-01")}
                </span>
                <CardTitle>Enterprise Analytics & Storage Portal</CardTitle>
                <CardDescription>
                  Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom
                  chatbot interface, leveraging Google Drive API integrations.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-1.5 md:justify-end">
                {["React", "TypeScript", "TailwindCSS"].map((tag: string, tagIndex: number) => (
                  <Badge
                    key={tag + tagIndex}
                    variant="sky"
                    className="font-mono text-xs uppercase rounded-sm tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </div>

            <div className="block absolute inset-0 w-full h-full z-10 select-none pointer-events-none">
              <div
                className="absolute top-0 bottom-0 w-full md:w-[45%] h-full transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0
                contrast-[1.1] brightness-[0.9] dark:brightness-[0.4] group-hover:brightness-[0.8] group-hover:contrast-100 left-0"
              >
                <div className="w-full h-full bg-muted animate-pulse" />
              </div>
              <div className="hidden md:block absolute inset-0 w-full h-full z-20 transition-colors duration-500 bg-linear-to-l from-card via-card/90 via-50% to-transparent" />
            </div>
          </div>
        </div>
      </>
    ),
  },
};
