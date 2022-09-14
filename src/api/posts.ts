import sanityClient from "../sanity";

export type Category = "Portfolio" | "About" | "Other";

export const getPostList = async (category: Category) => {
  const query =
    '*[_type == "post" && $category in categories[]->title]{body, "imageUrl": mainImage.asset->url, slug, title}';
  const params = { category: category };
  return sanityClient.fetch(query, params);
};
export const getPost = async (slug: string) => {
  const query =
    '*[_type == "post" && slug.current == $slug]{body, "imageUrl": mainImage.asset->url, slug, title, externalLinks}';
  const params = { slug };
  return sanityClient.fetch(query, params);
};
