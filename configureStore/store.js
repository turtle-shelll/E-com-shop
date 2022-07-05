import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import ProductsReducer from "./storeSlice";

// export const store = configureStore({
//   reducer: {
//     root: ProductsReducer,
//   },
// });

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    // return combinedReducer(state, action);
    return ProductsReducer(state, action);
  }
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      root: reducer,
    },
  });
};
export const wrapper = createWrapper(makeStore);
