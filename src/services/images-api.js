import axios from "axios";

const API_KEY = "21315741-9bacfcacd69aafd45f00bd411";

const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
  return axios(
    `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.data.hits);
};

export { fetchImages };
