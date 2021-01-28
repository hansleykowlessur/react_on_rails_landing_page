import PropTypes from "prop-types";
import React, { useState } from "react";

import { Container } from "@material-ui/core";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SubContent from "./components/SubContent";
import EndContent from "./components/EndContent";
import CssBaseline from "@material-ui/core/CssBaseline";

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>

      <Container>
        <Header />

        <MainContent />

        <SubContent />

        <EndContent />
      </Container>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
