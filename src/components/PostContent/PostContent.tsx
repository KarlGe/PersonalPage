import { PortableText } from "@portabletext/react";
import React from "react";
import Grid from "./Grid/Grid";
import ImageContent from "./ImageContent";
import ImageGalleryContent from "./ImageGalleryContent";
import VideoLink from "./VideoLink";

type Props = { content: any[] };

const PortableTextComponents = {
  types: {
    image: (imageData: any) => <ImageContent imageSource={imageData.value} />,
    imageGallery: ImageGalleryContent,
    videoLink: (videoData: any) => (
      <VideoLink videoUrl={videoData.value.url} type={videoData.value.type} />
    ),
    grid: (gridData: any) => (
      <Grid content={gridData.value} />
    ),
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
