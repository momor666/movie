import React, { Component } from 'react';
import glamorous from 'glamorous';
import Header from './components/Header';
import Movies from './components/Movies';

const Div = glamorous.div({
  minHeight: '100vh',
  maxHeight: '100vh',
  background: 'blue',
  textAlign: 'center',
})

class App extends Component {
  state = {
  }
  render = () => (
    <Div>
      <Header />
      <Movies />
    </Div>
  )
};

export default App;
