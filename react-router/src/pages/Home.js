import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>My home page!</h1>
      <p>
        Go to <Link to="/products">the list of prodcuts</Link>
      </p>
    </Fragment>
  );
};

export default HomePage;
