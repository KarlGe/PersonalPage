import React from "react";
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
            <a
              href={linkData.url}
              className="has-offset-border"
              target="_blank"
            >
              <BorderOffsetWrapper title={linkData.title} titleLevel="h2">
                <ImageContent
                  withOffsetWrapper={false}
                  imageSource={linkData.image}
                />
              </BorderOffsetWrapper>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalLinksList;
