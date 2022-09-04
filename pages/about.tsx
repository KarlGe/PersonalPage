import { PortableText } from "@portabletext/react";
import React from "react";
import useSWRImmutable from "swr/immutable";
import { getAboutPage } from "../src/api/pages";
import ImageContent from "../src/components/PostContent/ImageContent";
import PostContent from "../src/components/PostContent/PostContent";

export default function Home() {
  const { data, error } = useSWRImmutable("about", getAboutPage);
  console.log(data);
  if (!data) {
    return null;
  }
  const aboutData = data[0];

  return (
    <div>
      <ImageContent value={aboutData.mainImage} />
      <PostContent content={aboutData.body} />
    </div>
  );
}
