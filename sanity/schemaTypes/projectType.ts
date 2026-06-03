import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project List",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(100).error("A project heading title is required and below 100 characters."),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Overview Text",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(1).max(250).error("A short overview text is required and below 250 characters."),
    }),
    defineField({
      name: "tags",
      title: "System Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1).error("At least one tag is required."),
    }),
    defineField({
      name: "heroImage",
      title: "Primary Hero Screenshot",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error("A hero image is required."),
    }),
    defineField({
      name: "metrics",
      title: "Deployment Metrics",
      type: "object",
      fields: [
        defineField({
          name: "status",
          title: "Status",
          type: "string",
          options: { list: ["On-going", "Completed", "Maintenance", "Active Development"], layout: "dropdown" },
        }),
        defineField({
          name: "environment",
          title: "Environment Platform",
          type: "string",
          options: { list: ["Production", "Local", "Archived"], layout: "dropdown" },
        }),
        defineField({ name: "role", title: "Role", type: "string" }),
        defineField({ name: "repoUrl", title: "Source Repository Link", type: "string" }),
        defineField({ name: "liveUrl", title: "Production Live URL", type: "string" }),
      ],
    }),
    defineField({
      name: "blogNarrative",
      title: "Project Log Narrative Blocks",
      type: "array",
      of: [
        {
          type: "object",
          name: "blogBlock",
          title: "Narrative Block Workspace",
          fields: [
            defineField({
              name: "type",
              title: "Block Layout Format Alignment",
              type: "string",
              options: {
                list: [
                  { title: "Standard Text Only Block", value: "text-only" },
                  { title: "Full Width Media Frame", value: "full-width" },
                  { title: "Split Panel Layout (Text Left / Media Right)", value: "split-right" },
                  { title: "Split Panel Layout (Media Left / Text Right)", value: "split-left" },
                ],
              },
            }),
            defineField({ name: "heading", title: "Block Module Sub-Heading", type: "string" }),
            defineField({ name: "text", title: "Narrative Explanation Body Text", type: "text" }),
            defineField({ name: "imageUrl", title: "Supporting Component Image Asset", type: "image" }),
            defineField({ name: "imageAlt", title: "Accessibility Image Alt Text Description", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
