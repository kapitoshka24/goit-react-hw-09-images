import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import "./App.css";
import * as imagesApi from "./services/images-api";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";

export default function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [largeImageURL, setLargeImageURL] = useState("");
  const [tags, setTags] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noImages, setNoImages] = useState(false);

  useEffect(() => {
    if (searchQuery !== "") fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const onSubmit = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
    setImages([]);
    setError(null);
    setNoImages(false);
  };

  const fetchImages = () => {
    const options = { searchQuery, currentPage };

    setIsLoading(true);

    imagesApi
      .fetchImages(options)
      .then((images) => {
        setImages((prevImages) => [...prevImages, ...images]);
        setCurrentPage((prevPage) => prevPage + 1);

        if (images.length < 12) setNoImages(true);

        scrollDown();
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const onImageClick = (image, tags) => {
    setLargeImageURL(image);
    setTags(tags);
    setShowModal(true);
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollTop + window.innerHeight,
      behavior: "smooth",
    });
  };

  const onClose = () => {
    setShowModal(false);
  };

  const noImagesError = images.length === 0 && searchQuery !== "";
  const startPage = images.length === 0 && searchQuery === "";
  const shouldRenderLoadMoreButton =
    images.length > 0 && !isLoading && !noImages && currentPage <= 42;

  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      {!error ? (
        <>
          {startPage && (
            <h1 className="Error">
              Please, enter your request to find images.
            </h1>
          )}

          {noImagesError && !isLoading && (
            <h1 className="Error">Sorry, no images for the request.</h1>
          )}

          <ImageGallery images={images} onImageClick={onImageClick} />

          {shouldRenderLoadMoreButton && <Button onClick={fetchImages} />}

          {isLoading && (
            <Loader
              className="Loader"
              type="Bars"
              color="#3f51b5"
              height={70}
              width={70}
            />
          )}

          {showModal && (
            <Modal largeImage={largeImageURL} tags={tags} onClose={onClose} />
          )}
        </>
      ) : (
        <h1 className="Error">
          Something went wrong on a server side, try again later.
        </h1>
      )}
    </>
  );
}
