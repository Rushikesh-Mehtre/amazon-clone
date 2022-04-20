import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SearchResultPage from "./pages/SearchResult/SearchResultPage";
import HealthHouseHold from "./pages/HealthHouseholdPage/HealthHouseHold";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/search/:keyword" element={<SearchResultPage />} />
        <Route path="/health&household" element={<HealthHouseHold />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
