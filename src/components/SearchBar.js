import React from "react";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
