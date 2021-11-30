import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import Summary from "./pages/summary";

export default function Paths() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </>
  );
}
