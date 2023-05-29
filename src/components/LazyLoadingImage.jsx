import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyLoadingImage = ({ src, alt, height, width, className }) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholderSrc='https://placeholder.pics/svg/700x750'/* "/placeholder.svg" */
        className='image'
      />
    </>
  );
};

export default LazyLoadingImage;
