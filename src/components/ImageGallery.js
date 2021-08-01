import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        smallImage={webformatURL}
        largeImage={largeImageURL}
        tags={tags}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
