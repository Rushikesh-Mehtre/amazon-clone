import { configureStore } from "@reduxjs/toolkit";
import userCreationReducer from "../features/Usercreation/UserCreationSlice";
import userLoginReducer from "../features/Userlogin/UserLoginSlice";
import AddedtoCartProductsReducer from "../features/AddedToCartProducts/AddedToCartProductsSlice";
import SaveForLaterProductsReducer from "../features/SavedForLaterProducts/SavedForLaterProductsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userCreation: userCreationReducer,
  userLogin: userLoginReducer,
  addedToCartProducts: AddedtoCartProductsReducer,
  savedForLaterProducts: SaveForLaterProductsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
