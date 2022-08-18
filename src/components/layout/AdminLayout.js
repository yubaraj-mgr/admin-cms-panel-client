import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import SideMenu from "../side-menu/SideMenu";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* slider */}
      <SideMenu />
      {/* main body */}
      <main style={{ minHeight: "70vh" }} className="container">
        {children}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
