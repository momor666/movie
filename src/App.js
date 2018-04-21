import React, { Component } from 'react';
import glamorous from 'glamorous';
import Header from './components/Header';
import Movies from './components/Movies';
import './App.css';

const Div = glamorous.div({
  height: '100vh',
  background: 'blue'
})

class App extends Component {
  state = {

  }
  render = () => (
    <Div className="App">
      <Header />
      <Movies />
    </Div>
  )
};

export default App;
