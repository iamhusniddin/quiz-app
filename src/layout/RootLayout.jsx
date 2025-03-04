import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
