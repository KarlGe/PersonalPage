import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "oofe0lxh",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-06-02",
});
