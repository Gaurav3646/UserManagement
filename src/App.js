import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch data and store in Redux store
  }, [dispatch]);
  return (
    <div>
      <Router>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-semibold">
            User Management Application
          </h1>
        </header>
        <nav className="bg-gray-300 p-2">
          <ul className="flex space-x-2">
            <li>
              <NavLink to="/">User List</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create User</NavLink>
            </li>
          </ul>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" exact element={<UserList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
