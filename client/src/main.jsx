import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./lib/routes";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/clerk-react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const PUBLISHABLE_KEY =
  "pk_test_c3dlZXBpbmctdGFoci03Ni5jbGVyay5hY2NvdW50cy5kZXYk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <RouterProvider router={router} />
        </div>
      </ClerkProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
