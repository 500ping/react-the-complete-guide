import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.cart.isShow);
  const cartitems = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);
  const changed = useSelector((state) => state.cart.changed);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (changed) {
      dispatch(sendCartData(cartitems));
    }
  }, [cartitems, dispatch, changed]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
