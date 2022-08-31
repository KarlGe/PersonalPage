import sanityClient from "../sanity";

export const getSiteSettings = async () => {
  const query =
    '*[_type == "siteSettings" && _id == "siteSettings"]';
  const params = {};
  return sanityClient.fetch(query, params);
};
