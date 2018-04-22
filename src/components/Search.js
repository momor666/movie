import React from "react";
import glamorous from "glamorous";
import { colour, size } from "./Constants";

const Search = props => (
  <SearchContainer onSubmit={props.getMovie}>
    <InputUser name="test" />
    <InputButton type="submit" value="search" />
  </SearchContainer>
);

const SearchContainer = glamorous.form({
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
});

const InputUser = glamorous.input({
  background: "transparent",
  border: `3px solid ${colour.blue}`,
  padding: size.xsmall,
  color: colour.blue,
  width: "70%",
  marginRight: size.small,
  fontSize: size.small
});

const InputButton = glamorous.input({
  background: "transparent",
  border: `3px solid ${colour.blue}`,
  color: colour.blue,
  width: "30%",
  fontVariant: "small-caps",
  fontSize: size.small
});

export default Search;
