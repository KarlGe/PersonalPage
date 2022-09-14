import React from "react";
import ImageContent from "../PostContent/ImageContent";
import PostContent from "../PostContent/PostContent";
import { aboutStyle } from "./aboutView.linaria";

type Props = { aboutData: any };

function AboutView({ aboutData }: Props) {
  return (
    <div className={aboutStyle}>
      <div className="image-wrapper">
        <ImageContent imageSource={aboutData.mainImage} />
      </div>
      <div>
        <PostContent content={aboutData.body} />
      </div>
    </div>
  );
}

export default AboutView;
