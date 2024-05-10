import React from "react";
import Wishlist from "../Wishlist";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Cart from "../Cart";
import ProductDetails from "../ProductDetails";
import Profile from "../Profile";
import SignIn from "../auth/SignIn";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Auth from "../auth/Auth";
import MyAccount from "../MyAccount";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/productDetails"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
