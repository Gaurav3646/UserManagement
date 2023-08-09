// actions/userActions.js
// ... (existing imports and fetchUsers action)
// actions/userActions.js
export const createUser = (newUser) => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const createdUser = await response.json();
    dispatch({ type: "CREATE_USER", payload: createdUser });
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "SET_USERS", payload: data });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
export const updateUser = (editedUser) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${editedUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedUser),
      }
    );
    const updatedUser = await response.json();
    dispatch({ type: "UPDATE_USER", payload: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE_USER", payload: userId });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
