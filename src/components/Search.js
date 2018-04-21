import React, { Component } from "react";
import glamorous from "glamorous";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange(event) {
    event.persist();
    this.setState(() => ({
      value: event.target.value
    }));
  }
  render = () => (
    <SearchContainer onSubmit={this.props.getMovie}>
      <InputUser name="test" />
      <InputButton type="submit" value="search" />
    </SearchContainer>
  );
}

const SearchContainer = glamorous.form({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  position: "relative"
  // top: "71%"
});

const InputUser = glamorous.input({
  background: "transparent",
  border: "3px solid #001f3f",
  padding: "0.5em",
  color: "#001f3f",
  width: "100%",
  marginRight: "1em",
  fontSize: "1em"
});

const InputButton = glamorous.input({
  background: "transparent",
  border: "3px solid #001f3f",
  color: "#001f3f",
  fontVariant: "small-caps"
});

export default Search;
