import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProductsInCart: [],
};
const SelectedProductsInCartSlice = createSlice({
  name: "selectedProductsInCartInfo",
  initialState,
  reducers: {
    addToSelectedProductsInCart: (state, action) => {
      let idArr = state.selectedProductsInCart.map((item) => item.id);
      if (idArr.includes(action.payload.id)) {
        let updatedCartArr = state.selectedProductsInCart.filter((item) => item.id !== action.payload.id);
        // let alreadyPresentProductObj = state.selectedProductsInCart.filter((item) => item.id === action.payload.id)[0];
        updatedCartArr.push({ ...action.payload, quantity: action.payload.quantity });
        state.selectedProductsInCart = updatedCartArr;
      } else {
        // let productObj = { ...action.payload };
        // productObj.quantity = 1;
        state.selectedProductsInCart.push(action.payload);
      }
    },
    removeFromSelectedProductsInCart: (state, action) => {
      console.log(state.selectedProductsInCart);
      let updatedCartArr = state.selectedProductsInCart.filter((item) => item.id !== action.payload.id);
      state.selectedProductsInCart = updatedCartArr;
    },
    removeAllFromSelectedProductsInCart: (state, action) => {
      state.selectedProductsInCart = [];
    },
  },
});
export const { addToSelectedProductsInCart, removeFromSelectedProductsInCart, removeAllFromSelectedProductsInCart } =
  SelectedProductsInCartSlice.actions;
export default SelectedProductsInCartSlice.reducer;
