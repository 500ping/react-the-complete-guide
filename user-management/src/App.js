import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => {
    setUsers((prevState) => [user, ...prevState]);
  };

  return (
    <Fragment>
      <AddUser addNewUser={addNewUser} />
      <UserList users={users} />
    </Fragment>
  );
}

export default App;
