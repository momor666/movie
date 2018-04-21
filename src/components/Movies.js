import React, { Component } from "react";
import axios from "axios";
import glamorous from "glamorous";
import Search from "./Search";

class Movies extends Component {
  state = {
    title: "Casablanca",
    year: 1942,
    image:
      "https://ia.media-imdb.com/images/M/MV5BNzk2M2Y3MzYtNGMzMi00Y2FjLTkwODQtNmExYWU3ZWY3NzExXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    description:
      "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
    director: "Michael Curtiz",
    rating: 8.5,
    runtime: "102 min",
    awards: "Won 3 Oscars. Another 5 wins & 9 nominations."
  };
  getMovie = e => {
    e.preventDefault();
    const title = e.target.test.value;
    const url = `http://www.omdbapi.com/?apikey=42dc3460&t=${title}`;
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  setMovie = movie => {
    this.setState(() => ({
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      description: movie.Plot,
      director: movie.Director,
      rating: movie.imdbRating,
      runtime: movie.Runtime,
      awards: movie.Awards
    }));
  };
  render = () => (
    <MovieContainer>
      <Movie>
        <ContentContainer>
          <Search getMovie={this.getMovie} />
          <H1>
            {this.state.title} ({this.state.year})
          </H1>
          <P>{this.state.description}</P>
          <h3>Rating: {this.state.rating}</h3>
          <h3>Director: {this.state.director}</h3>
          <h3>Runtime: {this.state.runtime}</h3>
          {/* <h2>Awards:</h2> */}
          <p>{this.state.awards}</p>
        </ContentContainer>
        <ImageContainer>
          <Image src={this.state.image} alt="" />
        </ImageContainer>
      </Movie>
    </MovieContainer>
  );
}

const MovieContainer = glamorous.div({
  display: "flex",
  flexDirection: "column",
  // width: "100%",
  background: "#001f3f"
});

const Movie = glamorous.div({
  display: "flex",
  justifyContent: "space-between",
  alignSelf: "center",
  padding: "2em",
  width: "50rem",
  color: "#001f3f",
  background: "#FFDC00",
  opacity: "0.9"
});

const ContentContainer = glamorous.div({
  width: "60%",
  paddingRight: "1.5em",
  borderRight: "3px solid #001f3f"
});

const ImageContainer = glamorous.div({
  width: "300px",
  height: "450px",
  paddingLeft: "1.5em"
});

const Image = glamorous.img({
  width: "100%",
  height: "100%"
});

const H1 = glamorous.h1({
  fontFamily: "Open Sans, sans-serif"
});

const P = glamorous.p({
  color: "#555555"
});
export default Movies;
