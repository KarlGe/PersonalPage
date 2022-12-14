import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { sizes } from "../config/vars";

const client = sanityClient({
  projectId: "oofe0lxh",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-06-02",
});

const builder = imageUrlBuilder(client);
export function urlForImage(
  source: SanityImageSource,
  width: number = sizes.contentWidth,
  height?: number
) {
  if (!source) {
    return undefined;
  }
  if (height) {
    return builder.image(source).width(width).height(height);
  }
  return builder.image(source).width(width);
}

export default client;
