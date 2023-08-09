import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

function EditUser() {
  const { id } = useParams();
  const navgiate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.user.users.find((user) => user.id === Number(id))
  );

  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedPhone, setEditedPhone] = useState(user.phone);

  const handleSaveEdit = async () => {
    const editedUser = {
      id: user.id,
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
    };
    try {
      await dispatch(updateUser(editedUser));
      navgiate("/");
    } catch (e) {}
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Name:</label>
        <input
          className="w-full border rounded py-1 px-2"
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Email:</label>
        <input
          className="w-full border rounded py-1 px-2"
          type="email"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Phone:</label>
        <input
          className="w-full border rounded py-1 px-2"
          type="tel"
          value={editedPhone}
          onChange={(e) => setEditedPhone(e.target.value)}
        />
      </div>
      <button
        className="bg-green-500 text-white px-3 py-1 rounded"
        onClick={handleSaveEdit}
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditUser;
