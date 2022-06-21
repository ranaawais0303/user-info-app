import React, { useState, useRef } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  //Use ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //setting user name and age state
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  //set state for Error
  const [error, setError] = useState();

  //form handler add user to the component
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUserName.trim().length === 0) {
      //set error object
      setError({
        title: "Invalid Input",
        message: "Please enter valid username and age (non-Empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid age (>0)",
      });
      return;
    }

    //lifting data up to app component
    props.onAddUser(enteredAge, enteredUserName);

    //clear the text field but this is not good approach
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    //set field again empty
    // setEnteredUserName("");
    // setEnteredAge("");
  };

  //set Username here
  // const userNameChangeHandler = (e) => {
  //   setEnteredUserName(e.target.value);
  // };

  // //set age here
  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  //setting error to null
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler} className={style.input}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">AddUser </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
