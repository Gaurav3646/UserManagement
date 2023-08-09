import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions/userActions";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, phone };
      await dispatch(createUser(newUser));
      navigate("/");
    } catch (e) {}
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Create User</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name:</label>
          <input
            className="w-full border rounded py-1 px-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email:</label>
          <input
            className="w-full border rounded py-1 px-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Phone:</label>
          <input
            className="w-full border rounded py-1 px-2"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
