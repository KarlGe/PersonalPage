import React from "react";
import { urlForImage } from "../../sanity/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sizes } from "../../config/vars";
import BorderOffsetWrapper from "../atoms/BorderOffsetWrapper/BorderOffsetWrapper";
import { useElementMousePosition } from "../../hooks/useElementMousePosition";

type Props = { value: SanityImageSource; width?: number };

function ImageContent({ value, width }: Props) {
  return (
    <BorderOffsetWrapper filled>
      <img src={urlForImage(value, width).url()} />
    </BorderOffsetWrapper>
  );
}

ImageContent.defaultProps = {
  width: sizes.contentWidth,
};

export default ImageContent;
