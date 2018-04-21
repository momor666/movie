import React, { Component } from 'react';
import glamorous from 'glamorous';

const MoviesContainer = glamorous.div({
  display: 'flex',
  flexdirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  alignContent: 'center',
  height: '50%',
  width: '50%',
  background: 'blue',
  border: '1px solid black',
});

const Movie = glamorous.div({
  color: 'red',
})

class Movies extends Component {
  state = {

  }
  render = () => (
    <MoviesContainer>
      <Movie>

        <p>Header, again</p>
      </Movie>
    </MoviesContainer>
  )
}

export default Movies;
