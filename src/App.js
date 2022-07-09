import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SearchResultPage from "./pages/SearchResult/SearchResultPage";
import HealthHouseHold from "./pages/HealthHouseholdPage/HealthHouseHold";
import SignUp from "./pages/SignUp/SignUp";
import { CartItemsContext } from "./context/CartItemsContext";
import { useState } from "react";
import CheckOutDetailsPage from "./pages/CheckOutDetailsPage/CheckOutDetailsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import ReturnsAndOrders from "./pages/ReturnsAndOrders/ReturnsAndOrders";
import MyPrimePage from "./pages/MyPrimePage/MyPrimePage";
import { LoggedInContext } from "./context/LoggedInContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MobileContent from "./components/MobileContent";

function App() {
  const [items, setItems] = useState([]);
  const [saveForLaterItems, setSaveForLaterItems] = useState([]);
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
      case "REMOVE_ALL_ITEMS":
        if (!payload) {
          setItems([]);
        }
        return;
      default:
        return;
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatchLogInEvent = (actionType) => {
    switch (actionType) {
      case "LOG_IN":
        setIsLoggedIn(true);
        return;
      case "LOG_OUT":
        setIsLoggedIn(false);
        return;
      default:
        return;
    }
  };
  return (
    <>
      <div className="webContent">
        <LoggedInContext.Provider value={{ isLoggedIn, dispatchLogInEvent }}>
          <CartItemsContext.Provider
            value={{ items, saveForLaterItems, dispatchItemEvent }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
              <Route
                path="/checkout-details"
                element={<ProtectedRoute Component={CheckOutDetailsPage} />}
              />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/search/:keyword" element={<SearchResultPage />} />
              <Route path="/itemdetials" element={<ItemDetailsPage />} />
              <Route path="/health&household" element={<HealthHouseHold />} />
              <Route
                path="/returns&orders"
                element={<ProtectedRoute Component={ReturnsAndOrders} />}
              />
              <Route
                path="/prime"
                element={<ProtectedRoute Component={MyPrimePage} />}
              />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </CartItemsContext.Provider>
        </LoggedInContext.Provider>
      </div>
      <div className="mobileContent">
        {" "}
        <MobileContent />
      </div>
    </>
  );
}

export default App;
