import React from "react";
import glamorous from "glamorous";
import Movies from "./components/Movies";
import { colour, screen } from "./components/Constants";

const Div = glamorous.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  background: colour.red,
  fontFamily: "Open Sans, sans-serif",
  fontSize: "18px",
  [screen.mobile]: {
    background: colour.yellow,
    fontSize: "16px",
    height: "auto"
  }
});

const App = () => (
  <Div>
    <Movies />
  </Div>
);

export default App;
