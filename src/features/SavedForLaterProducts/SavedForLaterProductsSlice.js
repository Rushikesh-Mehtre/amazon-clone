import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedForLaterProducts: [],
};

const SavedForLaterProductsSlice = createSlice({
  name: "savedForLaterProductsInfo",
  initialState,
  reducers: {
    addProductToSaveForLater: (state, action) => {
      console.log(action);
      state.savedForLaterProducts.push(action.payload);
    },
    removeProductToSaveForLater: (state, action) => {
      let updatedCartArr = state.savedForLaterProducts.filter((item) => item.id !== action.payload.id);
      state.savedForLaterProducts = updatedCartArr;
    },
  },
});
export const { addProductToSaveForLater, removeProductToSaveForLater } = SavedForLaterProductsSlice.actions;
export default SavedForLaterProductsSlice.reducer;
