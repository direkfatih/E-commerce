import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
