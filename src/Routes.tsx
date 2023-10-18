import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
// import Forwards from "./components/Forwards";
// import Midfielders from "./components/Midfielders";
// import Defenders from "./components/Defenders";
// import Keepers from "./components/Keepers";
// import Coaches from "./components/Coaches";
import Shop from "./pages/shop";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route path="/shop/forwards" element={<Forwards />} />
        <Route path="/shop/midfielders" element={<Midfielders />} />
        <Route path="/shop/defenders" element={<Defenders />} />
        <Route path="/shop/keepers" element={<Keepers />} />
        <Route path="/shop/coaches" element={<Coaches />} /> */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
