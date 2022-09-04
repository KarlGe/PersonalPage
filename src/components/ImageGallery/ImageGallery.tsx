import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { style } from "./imageGallery.linaria";

type ImageData = { original: string; thumbnail: string };
type Props = { images: ImageData[] };

function ImageGallery({ images }: Props) {
  return (
    <div className={style}>
      <ReactImageGallery items={images} />
    </div>
  );
}

export default ImageGallery;
