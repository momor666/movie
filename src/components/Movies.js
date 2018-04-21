import React, { Component } from 'react';
import axios from 'axios';
import glamorous from 'glamorous';
import Search from './Search';

class Movies extends Component {
  state = {
    title: 'Hello World',
    year: 2018,
    image: null,
    description: 'This is a poor description...',
  }
  getMovie = (e) => {
    e.preventDefault();
    const title = (e.target.test.value)
    const url = `http://www.omdbapi.com/?apikey=42dc3460&t=${title}`
    axios.get(url)
    .then((response) => {
      console.log(response.data)
      this.setMovie(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  setMovie = (movie) => {
    this.setState(() => ({
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      description: movie.Plot,
    }))
  }
  render = () => (
    <MovieContainer>
      <Search
        getMovie={this.getMovie}
      />
      <Movie>
        <h3>{this.state.title} ({this.state.year})</h3>
        <img src={this.state.image} alt="" />
        <p>{this.state.description}</p>
      </Movie>
    </MovieContainer>
  )
}

const MovieContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: 'white',
});

const Movie = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  height: '30rem',
  width: '50rem',
  color: 'red',
  border: '1px solid black',
  background: 'green',
});

export default Movies;
