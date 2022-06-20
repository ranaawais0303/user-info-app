import React, { useState } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //form handler add user to the component
  const addUserHandler = (e) => {
    if (enteredUserName.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    //lifting data up to app component
    props.onAddUser(enteredAge, enteredUserName);

    //set field again empty
    setEnteredUserName("");
    setEnteredAge("");
    e.preventDefault();
  };

  //set Username here
  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  //set age here
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  return (
    <div>
      <ErrorModal title="an error Accured" message="Something went wrong!" />
      <Card className={style.input}>
        <form onSubmit={addUserHandler} className={style.input}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">AddUser </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
