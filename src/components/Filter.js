import React from "react";

const Filter = ({ sortUsers }) => (
  <div className="p-4 flex justify-center gap-4">
    <button
      onClick={() => sortUsers("first")}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Sort by First Name
    </button>
    <button
      onClick={() => sortUsers("last")}
      className="bg-green-500 text-white px-4 py-2 rounded-md"
    >
      Sort by Last Name
    </button>
  </div>
);

export default Filter;
