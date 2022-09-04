import React from "react";
import { urlForImage } from "../../sanity/sanity";
import ImageGallery from "../ImageGallery/ImageGallery";

type Props = { value: any };

function ImageGalleryContent({ value }: Props) {
  console.log(value);
  const images = value.images.map((imageData) => ({
    original: urlForImage(imageData),
    thumbnail: urlForImage(imageData, 100, 100),
  }));
  return <ImageGallery images={images} />;
}

export default ImageGalleryContent;
