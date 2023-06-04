import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Home from "./components/Layout/Home.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import cartProductsLoader from "./loader/cartProductsLoader.js";
import Checkout from "./components/Checkout/Checkout.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
