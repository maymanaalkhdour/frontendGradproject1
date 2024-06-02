import React from "react";

import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import { SessionProvider } from "../context/SessionCont";
import FormsProvider from "../context/FormsContext";

function Root() {
  return (
    <SessionProvider>
      <FormsProvider>
        <Banner />
        <Outlet />
      </FormsProvider>
    </SessionProvider>
  );
}

export default Root;
