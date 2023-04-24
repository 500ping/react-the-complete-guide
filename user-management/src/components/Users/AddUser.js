import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const INIT_VALUE = {
  username: "",
  age: "",
};

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(INIT_VALUE);
  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      username: event.target.value,
    }));
  };

  const ageChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      age: event.target.value,
    }));
  };

  const addUserhandler = (event) => {
    event.preventDefault();

    if (
      userInput.username.trim().length === 0 ||
      !+userInput.age ||
      +userInput.age <= 0
    ) {
      setIsValid(false);
      return;
    }

    props.addNewUser({
      ...userInput,
      id: uuidv4(),
    });
    setIsValid(true);
    setUserInput(INIT_VALUE);
  };

  const closeModal = () => {
    setIsValid(true);
  };

  return (
    <div>
      {!isValid && (
        <ErrorModal
          title="An error occured!"
          message="Something went wrong!"
          onAction={closeModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userInput.username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userInput.age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
