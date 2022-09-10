import { PortableText } from "@portabletext/react";
import React from "react";
import ImageContent from "./ImageContent";
import ImageGalleryContent from "./ImageGalleryContent";

type Props = { content: any[] };

const PortableTextComponents = {
  types: { image: ImageContent, imageGallery: ImageGalleryContent },
};

function PostContent({ content }: Props) {
  return <PortableText className="post-content" value={content} components={PortableTextComponents} />;
}

export default PostContent;
