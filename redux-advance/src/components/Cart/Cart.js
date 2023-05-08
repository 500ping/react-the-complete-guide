import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  let items = [];
  for (const key in cartItems) {
    const quantity = cartItems[key].amount;
    const price = cartItems[key].price;
    items.push(
      <CartItem
        key={key}
        item={{
          title: key,
          total: quantity * price,
          quantity,
          price,
        }}
      />
    );
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
