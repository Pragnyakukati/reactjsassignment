import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchQuery, users]);

  const sortUsers = (key) => {
    const sorted = [...filteredUsers].sort((a, b) =>
      a.name[key].localeCompare(b.name[key])
    );
    setFilteredUsers(sorted);
  };

  return (
    <div className="app">
      <h1 className="text-center text-2xl font-bold">User Directory</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter sortUsers={sortUsers} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
