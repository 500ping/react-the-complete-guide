import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [isValid, setIsValid] = useState(true);

  const addUserhandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      !+enteredAge ||
      +enteredAge <= 0
    ) {
      setIsValid(false);
      return;
    }

    props.addNewUser({
      username: enteredUsername,
      age: enteredAge,
      id: uuidv4(),
    });

    setIsValid(true);
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeModal = () => {
    setIsValid(true);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={usernameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
