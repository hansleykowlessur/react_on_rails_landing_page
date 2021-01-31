import PropTypes from "prop-types";
import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SubContent from "./components/SubContent";
import EndContent from "./components/EndContent";
import Footer from "./components/Footer";

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>

        <Header />

        <MainContent />

        <SubContent />

        <EndContent />

        <Footer />
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
