import sanityClient from "../sanity";

export const getPostList = async () => {
  const query =
    '*[_type == "post" && $category in categories[]->title]{body, "imageUrl": mainImage.asset->url, slug, title}';
  const params = { category: "Portfolio" };
  return sanityClient.fetch(query, params);
};
export const getPost = async (slug: string) => {
  const query =
    '*[_type == "post" && slug.current == $slug]{body, "imageUrl": mainImage.asset->url, slug, title}';
  const params = { slug };
  return sanityClient.fetch(query, params);
};
