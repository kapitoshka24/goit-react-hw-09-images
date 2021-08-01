import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function Modal({ largeImage, tags, onClose }) {
  useEffect(() => {
    const onEscClose = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscClose);

    return () => window.removeEventListener("keydown", onEscClose);
  }, [onClose]);

  const backdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={backdropClick}>
      <div className="Modal">
        <img className="Modal-photo" src={largeImage} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
