import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddNewUser = (newUsername, newAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: newUsername, age: newAge, id: Math.random() },
      ];
    });
  };

  return (
    <div>
      <AddUser handleAddNewUser={handleAddNewUser} />
      {usersList.length && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
