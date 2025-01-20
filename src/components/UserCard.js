import React from "react";

const UserCard = ({ user }) => (
  <div className="bg-white shadow-md rounded-md p-4 text-center">
    <img
      className="rounded-full mx-auto mb-4"
      src={user.picture.large}
      alt={`${user.name.first} ${user.name.last}`}
    />
    <h3 className="font-bold">
      {user.name.first} {user.name.last}
    </h3>
    <p>{user.email}</p>
    <p>{user.location.city}, {user.location.country}</p>
  </div>
);

export default UserCard;
