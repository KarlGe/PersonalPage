import React from "react";
import { urlForImage } from "../../sanity/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sizes } from "../../config/vars";
import BorderOffsetWrapper from "../atoms/BorderOffsetWrapper/BorderOffsetWrapper";

type Props = {
  imageSource: SanityImageSource;
  width?: number;
  withOffsetWrapper?: Boolean;
};

function ImageContent({ imageSource, width, withOffsetWrapper }: Props) {
  const imgUrl = urlForImage(imageSource, width)?.url();
  if (!imgUrl) {
    return null;
  }
  if (!withOffsetWrapper) {
    return <img src={imgUrl} />;
  }
  return (
    <BorderOffsetWrapper filled>
      <img src={imgUrl} />
    </BorderOffsetWrapper>
  );
}
ImageContent.defaultProps = {
  width: sizes.contentWidth,
  withOffsetWrapper: true,
};

export default ImageContent;
