import React, { Component } from "react";
import glamorous from "glamorous";
import Movies from "./components/Movies";

const Div = glamorous.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  background: "#001f3f",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "18px"
});

class App extends Component {
  state = {};
  render = () => (
    <Div>
      <Movies />
    </Div>
  );
}

export default App;
