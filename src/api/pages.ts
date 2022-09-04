import sanityClient from "../sanity";

export const getAboutPage = async () => {
  const query =
    '*[_type == "post" && $category in categories[]->title]{body, mainImage, slug, title}';
  const params = { category: "About" };
  return sanityClient.fetch(query, params);
};
