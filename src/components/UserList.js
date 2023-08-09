import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/actions/userActions";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);
  const navigate = useNavigate();

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white p-4 rounded-lg shadow">
            <strong className="block font-semibold">Name:</strong> {user.name}
            <br />
            <strong className="block font-semibold">Email:</strong> {user.email}
            <br />
            <strong className="block font-semibold">Phone:</strong> {user.phone}
            <div className="mt-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                onClick={() => navigate(`/edit/${user.id}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
