"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      navbar: (props) => {
        return (
          <div className="flex flex-col w-full">
            {/* Direct text banner back to frontend web layer */}
            <div className="bg-zinc-900 text-zinc-400 text-xs px-4 py-1.5 font-mono flex justify-between items-center border-b border-zinc-800">
              <span>PORTFOLIO_CORE_OS</span>
              <a
                href="/"
                className="text-muted-foreground/30 hover:text-emerald-500 transition-colors duration-300 tracking-widest hidden md:block"
              >
                &larr; EXIT_TO_MAIN_SITE
              </a>
            </div>
            {/* Renders the rest of Sanity's native header underneath our custom strip */}
            {props.renderDefault(props)}
          </div>
        );
      },
    },
  },
});
