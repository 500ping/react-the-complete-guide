import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button || "button"}
      type={props.type}
      onClick={props.onCLick}
    >
      {props.children}
    </button>
  );
};

export default Button;
