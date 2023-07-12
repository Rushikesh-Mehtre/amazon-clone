import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedToCartProducts: [],
};
const AddedToCartProductsSlice = createSlice({
  name: "addedToCartProductsInfo",
  initialState,
  reducers: {
    addToCartProduct: (state, action) => {
      let idArr = state.addedToCartProducts.map((item) => item.id);
      console.log("idArr", idArr);
      if (idArr.includes(action.payload.id)) {
        let updatedCartArr = state.addedToCartProducts.filter((item) => item.id !== action.payload.id);
        // let alreadyPresentProductObj = state.addedToCartProducts.filter((item) => item.id === action.payload.id)[0];
        updatedCartArr.push({ ...action.payload, quantity: action.payload.quantity });
        state.addedToCartProducts = updatedCartArr;
      } else {
        // let productObj = { ...action.payload };
        // productObj.quantity = 1;
        state.addedToCartProducts.push(action.payload);
      }

      // }
    },
    removeFromCartProduct: (state, action) => {
      console.log(state.addedToCartProducts);
      let updatedCartArr = state.addedToCartProducts.filter((item) => item.id !== action.payload.id);
      state.addedToCartProducts = updatedCartArr;
    },
    emptyCart: (state, action) => {
      state.addedToCartProducts = [];
    },
  },
});
export const { addToCartProduct, removeFromCartProduct, emptyCart } = AddedToCartProductsSlice.actions;
export default AddedToCartProductsSlice.reducer;
