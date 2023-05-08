import { configureStore, createSlice } from "@reduxjs/toolkit";

const initCartState = {
  isShow: false,
  items: {},
  changed: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItem(state, action) {
      state.changed = true;
      const itemTitle = action.payload.title;
      if (itemTitle in state.items) {
        state.items[itemTitle].amount += action.payload.amount;
      } else {
        state.items[itemTitle] = {
          amount: action.payload.amount,
          price: action.payload.price,
        };
      }
    },
    removeItem(state, action) {
      state.changed = true;
      const itemTitle = action.payload.title;
      if (itemTitle in state.items) {
        state.items[itemTitle].amount -= action.payload.amount;
        if (state.items[itemTitle].amount === 0) {
          delete state.items[itemTitle];
        }
      }
    },
    toggleCart(state) {
      state.isShow = !state.isShow;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export default store;
