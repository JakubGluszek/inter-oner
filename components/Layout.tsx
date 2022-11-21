import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  header: {
    position: "sticky" | "fixed";
    transparent: boolean;
  };
}

const Layout: React.FC<Props> = ({ children, header }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen">
        <Header {...header} />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
