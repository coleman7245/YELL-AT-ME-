import React from "react";

export const Search = ({
  username,
  handleChange,
  handleSearch,
  setUsername,
}) => {
  return (
    <div className="search-container">
      <form>
        <label>Search By User: </label>
        <input type="text" value={username} onChange={(e) => handleChange(e)} />
        <button onClick={handleSearch} className="search-button">
          Submit
        </button>
      </form>
    </div>
  );
};
