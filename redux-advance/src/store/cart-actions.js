import { cartActions } from ".";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://quick-note-bf885-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      return await response.json();
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ items: cartData || {} }));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cartitems) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://quick-note-bf885-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartitems),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };

    try {
      dispatch(
        cartActions.showNotification({
          status: "ending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      await sendRequest();

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
