import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import HomePage from "./pages/Home/home.page";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/Login/login.page";
import { RegisterPage } from "./pages/Register/register.page";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
