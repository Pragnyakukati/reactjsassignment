import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="p-4">
    <input
      type="text"
      placeholder="Search users..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 border rounded-md"
    />
  </div>
);

export default SearchBar;
