const allProjectsQuery = `
  *[_type == "project"] | order(_updatedAt desc){
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    shortDescription,
    tags
`;

export const allProjectsQueryHome = allProjectsQuery + `
  }[$start...$start+$limit]
`;

export const allProjectsQueryProjects = allProjectsQuery + `
  ,heroImage
  }[$start...$start+$limit]
`

export const singleProjectQuery = `
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    shortDescription,
    tags,
    heroImage,
    metrics,
    blogNarrative
  }
`;
