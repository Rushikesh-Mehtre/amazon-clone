import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SearchResultPage from "./pages/SearchResult/SearchResultPage";
import HealthHouseHold from "./pages/HealthHouseholdPage/HealthHouseHold";
import SignUp from "./pages/SignUp/SignUp";
import { CartItemsContext } from "./context/CartItemsContext";
import { useState } from "react";
import CheckOutDetailsPage from "./pages/CheckOutDetailsPage/CheckOutDetailsPage";
function App() {
  const [items, setItems] = useState([]);
  const [saveForLaterItems, setSaveForLaterItems] = useState([]);

  console.log(items);
  const dispatchItemEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_ITEM":
        setItems([...items, payload]);
        return;
      case "REMOVE_ITEM":
        setItems(
          items.filter(
            (item) => item.id !== payload.id && item.title !== payload.title
          )
        );
        return;
      case "SAVE_FOR_LATER_ITEM":
        setItems(
          items.filter(
            (item) => item.id !== payload.id && item.title !== payload.title
          )
        );
        setSaveForLaterItems([...saveForLaterItems, payload]);
        return;
      case "REMOVE_FROM_SAVED_ITEMS":
        setSaveForLaterItems(
          items.filter(
            (item) => item.id !== payload.id && item.title !== payload.title
          )
        );

        return;
      default:
        return;
    }
  };
  return (
    <BrowserRouter>
      <CartItemsContext.Provider
        value={{ items, saveForLaterItems, dispatchItemEvent }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/checkout-details" element={<CheckOutDetailsPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search/:keyword" element={<SearchResultPage />} />
          <Route path="/health&household" element={<HealthHouseHold />} />
        </Routes>
      </CartItemsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
