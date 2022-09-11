import React from "react";
import { urlForImage } from "../../sanity/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sizes } from "../../config/vars";
import BorderOffsetWrapper from "../atoms/BorderOffsetWrapper/BorderOffsetWrapper";
import { PortableTextComponent } from "@portabletext/react";

type Props = { value: SanityImageSource; width?: number };

function ImageContent({ value, width }: Props) {
  return (
    <BorderOffsetWrapper filled>
      <img src={urlForImage(value, width).url()} />
    </BorderOffsetWrapper>
  );
}

export interface CodeBlock {
  _type: "image";
}

export const ImageTest: PortableTextComponent<CodeBlock> = ({ value }) => {
  return <ImageContent value={value} />;
};

ImageContent.defaultProps = {
  width: sizes.contentWidth,
};

export default ImageContent;
