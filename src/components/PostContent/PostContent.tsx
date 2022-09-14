import { PortableText } from "@portabletext/react";
import React from "react";
import ImageContent from "./ImageContent";
import ImageGalleryContent from "./ImageGalleryContent";

type Props = { content: any[] };

const PortableTextComponents = {
  types: {
    image: (imageData) => <ImageContent imageSource={imageData.value} />,
    imageGallery: ImageGalleryContent,
  },
};

function PostContent({ content }: Props) {
  return (
    <div className="post-content">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
}

export default PostContent;
