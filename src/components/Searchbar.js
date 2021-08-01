import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (evt) => {
    const { value } = evt.target;

    setSearchQuery(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
