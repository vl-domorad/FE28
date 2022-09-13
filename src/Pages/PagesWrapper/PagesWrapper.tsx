import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Blog from "../Blog";
import { PathNames } from "../Router/Router";

const PagesWrapper = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      {location.pathname === PathNames.Home ? <Blog /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default PagesWrapper;
