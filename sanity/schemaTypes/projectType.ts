import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project List",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Project URL Slug ID",
      type: "string",
      validation: (Rule) => Rule.required().error("An internal tracking URL ID slug is mandatory."),
    }),
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).max(100).error("A project heading title is required and below 100 characters."),
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
      name: "dateCreated",
      title: "Deployment Date",
      type: "string",
      validation: (Rule) => Rule.required().error("A deployment date is required."),
    }),
    defineField({
      name: "dateUpdated",
      title: "Last Updated Date",
      type: "string",
      validation: (Rule) => Rule.required().error("A last updated date is required."),
    }),

    // EMBEDDED NESTED SYSTEM METRICS OBJECT
    defineField({
      name: "metrics",
      title: "Deployment Metrics",
      type: "object",
      fields: [
        defineField({
          name: "status",
          title: "Status",
          type: "string",
          options: { list: ["On-going", "Completed", "Maintenance"] },
        }),
        defineField({ name: "environment", title: "Environment Platform", type: "string" }),
        defineField({ name: "role", title: "Role", type: "string" }),
        defineField({ name: "repoUrl", title: "Source Repository Link", type: "string" }),
        defineField({ name: "liveUrl", title: "Production Live URL", type: "string" }),
      ],
    }),

    // THE FLEXIBLE BLOG NARRATIVE CONFIGURABLE CONTENT ENGINE ARRAY
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
