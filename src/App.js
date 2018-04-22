import React from "react";
import glamorous from "glamorous";
import Movies from "./components/Movies";
import { colour } from "./components/Constants";

const Div = glamorous.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  background: colour.red,
  fontFamily: "Open Sans, sans-serif",
  fontSize: "18px"
});

const App = () => (
  <Div>
    <Movies />
  </Div>
);

export default App;
