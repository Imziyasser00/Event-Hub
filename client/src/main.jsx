import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import "./index.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/clerk-react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Footer  from './components/Footer'
import Tickets from "./pages/Tickets";
import PageNotFound from "./pages/PageNotFound";
const PUBLISHABLE_KEY =
  "pk_test_c3dlZXBpbmctdGFoci03Ni5jbGVyay5hY2NvdW50cy5kZXYk";

 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <div className=" bg-bgColor  min-h-screen">
            <div className="max-w-7xl mx-auto min-h-screen ">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/event/:id" element={<Event />}/>
                <Route path="/tickets/" element={<Tickets />}/>
                <Route path="/*" element={<PageNotFound />}/>
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </ClerkProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
