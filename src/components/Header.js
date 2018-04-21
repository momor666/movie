import React from 'react';
import glamorous from 'glamorous';

const  H1  = glamorous.h1({
  color: 'red',
  marginTop: '0'
});
const Div = glamorous.div({
  color: 'yellow',
  background: 'blue'
})

const Header = () => (
  <Div color="blue">
    <H1>Movies</H1>
    <p>Header, again</p>
  </Div>
)

export default Header
