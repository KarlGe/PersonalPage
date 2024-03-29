import React from "react";
import BorderOffsetLink from "../atoms/BorderOffsetLink/BorderOffsetLink";
import BorderOffsetWrapper from "../atoms/BorderOffsetWrapper/BorderOffsetWrapper";
import ImageContent from "../PostContent/ImageContent";
import { style } from "./externalLinksList.linaria";

export type ExternalLink = {
  image: any;
  title: string;
  url: string;
  _id: string;
};
type Props = { linksData: ExternalLink[] };

function ExternalLinksList({ linksData }: Props) {
  if (!linksData) {
    return null;
  }
  return (
    <div className={style}>
      <ul>
        {linksData.map((linkData) => (
          <li key={linkData._id}>
            <a href={linkData.url} target="_blank">
              <ImageContent
                withOffsetWrapper={false}
                imageSource={linkData.image}
              />
              <h2>{linkData.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalLinksList;
