import React from "react";

export type VideoTypes = "youtube";

type Props = {
  videoUrl: string;
  type: VideoTypes;
};

function VideoLink({ videoUrl, type }: Props) {
  if (type === "youtube") {
    return (
      <div>
        <iframe
          src={videoUrl}
          allowFullScreen
          width="800"
          height="450"
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
  return <div>'Unknown video type'</div>;
}

export default VideoLink;
