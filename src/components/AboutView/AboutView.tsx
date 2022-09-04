import React from "react";
import { useLayoutSettings } from "../../hooks/useLayoutSettings";
import ImageContent from "../PostContent/ImageContent";
import PostContent from "../PostContent/PostContent";
import { aboutStyle } from "./aboutView.linaria";

type Props = { aboutData: any };

function AboutView({ aboutData }: Props) {
  useLayoutSettings(null, "about");

  return (
    <div className={aboutStyle}>
      <div className="image-wrapper">
        <ImageContent value={aboutData.mainImage} />
      </div>
      <div>
        <PostContent content={aboutData.body} />
      </div>
    </div>
  );
}

export default AboutView;
