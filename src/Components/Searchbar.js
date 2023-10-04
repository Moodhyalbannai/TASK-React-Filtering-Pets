import React from "react";

const Searchbar = ({ query, setQuery }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <input
        onChange={handleInputChange}
        value={query}
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
};

export default Searchbar;
