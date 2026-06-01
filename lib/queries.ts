export const allProjectsQuery = `
  *[_type == "project"] | order(_createdAt desc){ 
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    shortDescription, 
    tags,
    heroImage
  }
`;

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
