import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfCartItem = useSelector(
    (state) => Object.keys(state.cart.items).length
  );

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default CartButton;
