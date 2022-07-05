import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [
  {
    id: 1,
    name: "laptop",
    price: 10000,
    description:
      "this is laptop, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas",
    image: "laptop-s.jpg",
    ratings: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: "head phone",
    price: 2000,
    description:
      "this is head phone, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas",
    image: "head-phone-s.jpg",
    ratings: [1, 2, 3],
  },
  {
    id: 3,
    name: "mobile",
    price: 7000,
    description:
      "this is mobile, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas",
    image: "mobile-s.jpg",
    ratings: [1, 2, 3, 4],
  },
];
const initialState = {
  conform: false,
  setSignUpPage: false,
  error: null,
  data: [],
  isOnline: false,
  products: initialProducts,
  cartItems: [],
  total: 0,
};

const productsSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    hideConform: (state, action) => {
      state.conform = false;
    },
    removeAllProductsFromCart: (state, action) => {
      state.cartItems = [];
    },
    removeProductfromCart: (state, action) => {
      state.cartItems = action.payload;
    },
    showSignUpPage: (state, action) => {
      state.setSignUpPage = true;
    },
    hideSignUpPage: (state, action) => {
      state.setSignUpPage = false;
    },
    setProducts: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.products = [...state.products, ...action.payload];
    },
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    setTotal: (state, action) => {
      const allProducts = state.cartItems;
      const totalPrice = allProducts.reduce((previousValue, product) => {
        return previousValue + product.price;
      }, 0);
      state.total = totalPrice;
    },
    setOnline: (state, action) => {
      state.isOnline = true;
      state.error = null;
    },
    buyProduct: (state, action) => {
      const onlineUser = state.isOnline;
      if (!onlineUser) {
        state.setSignUpPage = true;
        state.error = "please log in before buying any products.";
        return;
      }
      state.conform = true;
    },
    buyAllProducts: (state, action) => {
      const cartLength = state.cartItems.length;
      const onlineUser = state.isOnline;
      if (cartLength === 0) {
        state.error = "there is no product to make this transaction.";
        return;
      }
      if (!onlineUser) {
        state.setSignUpPage = true;
        state.error = "please log in before buying any products.";
        return;
      }
      state.cartItems = [];
      state.conform = true;
    },
  },
  //   extraReducers: {
  //     [productsSlice.actions.setProducts.pending]: (state, action) => {
  //       state.isLoading = true;
  //     },
  //     [productsSlice.actions.setProducts.fulfilled]: (state, action) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //     },
  //     [productsSlice.actions.setProducts.rejected]: (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

export const {
  setProducts,
  setCartItems,
  setTotal,
  setOnline,
  showSignUpPage,
  hideSignUpPage,
  removeProductfromCart,
  removeAllProductsFromCart,
  buyProduct,
  buyAllProducts,
  hideConform,
} = productsSlice.actions;

export default productsSlice.reducer;
