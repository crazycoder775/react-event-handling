import React from "react";
import { render } from "react-dom";
import Person from "./Person";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Person />
  </div>
);

render(<App />, document.getElementById("root"));
