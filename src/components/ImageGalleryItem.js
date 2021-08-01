import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ smallImage, largeImage, tags, onImageClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={smallImage}
      alt={tags}
      className="ImageGalleryItem-image"
      onClick={() => onImageClick(largeImage, tags)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
