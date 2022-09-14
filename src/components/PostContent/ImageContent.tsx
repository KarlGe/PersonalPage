import React from "react";
import { urlForImage } from "../../sanity/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sizes } from "../../config/vars";
import BorderOffsetWrapper from "../atoms/BorderOffsetWrapper/BorderOffsetWrapper";
import { PortableTextComponent } from "@portabletext/react";

type Props = { imageSource: SanityImageSource; width?: number };

function ImageContent({ imageSource, width }: Props) {

  return (
    <BorderOffsetWrapper filled>
      <img src={urlForImage(imageSource, width).url()} />
    </BorderOffsetWrapper>
  );
}
ImageContent.defaultProps = {
  width: sizes.contentWidth,
};

export default ImageContent;
