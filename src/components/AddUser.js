import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

export default function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = userName.trim();
    const enteredAge = userAge.trim();

    if (enteredUsername.length === 0 && userAge.length === 0) {
      setError({
        title: "Invalid name",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (strictly greater than zero)",
      });
      return;
    }
    // console.log(userName, userAge);
    props.handleAddNewUser(enteredUsername, enteredAge);
    // e.target.reset();
    setUserName("");
    setUserAge("");
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };
  const dismissErrorModal = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleDismiss={dismissErrorModal}
        />
      )}
      <Card extraClasses={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={handleUserName}
          ></input>
          <label htmlFor="age">Age (Years): </label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={handleUserAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
