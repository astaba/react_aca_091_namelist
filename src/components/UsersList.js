import React from "react";
import Card from "./Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card extraClasses={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years of age)
          </li>
        ))}
      </ul>
    </Card>
  );
}
