import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const userDetails = props.users.map((user) => (
    <li key={user.id}>
      {user.username} ({user.age} years old)
    </li>
  ));

  return (
    <Card className={classes.users}>
      <ul>{userDetails}</ul>
    </Card>
  );
};

export default UserList;
