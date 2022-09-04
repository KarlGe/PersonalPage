import React from "react";
import urlBuilder from "@sanity/image-url";
import { urlForImage } from "../../sanity/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sizes } from "../../config/vars";

type Props = { value: SanityImageSource; width?: number };

function ImageContent({ value, width }: Props) {
  return <img src={urlForImage(value, width).url()} />;
}

ImageContent.defaultProps = {
  width: sizes.contentWidth,
};

export default ImageContent;
