import React, { Component } from "react";
import axios from "axios";
import glamorous from "glamorous";
import Search from "./Search";
import { colour, size } from "./Constants";

class Movies extends Component {
  state = {
    title: "casablanca",
    year: 1942,
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    description:
      "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
    director: "michael curtiz",
    rating: 8.5,
    runtime: "102 min"
  };
  getMovie = e => {
    e.preventDefault();
    const title = e.target.test.value;
    const url = `http://www.omdbapi.com/?apikey=42dc3460&t=${title}`;
    axios
      .get(url)
      .then(response => {
        this.setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  setMovie = movie => {
    this.setState(() => ({
      title: movie.Title.toLowerCase(),
      year: movie.Year,
      image: movie.Poster,
      description: movie.Plot,
      director: movie.Director.toLowerCase(),
      rating: movie.imdbRating,
      runtime: movie.Runtime
    }));
  };
  render = () => (
    <Movie>
      <ContentContainer>
        <Search getMovie={this.getMovie} />
        <H1>
          {this.state.title} ({this.state.year})
        </H1>
        <p>{this.state.description}</p>
        <H3>rating: {this.state.rating}</H3>
        <H3>director: {this.state.director}</H3>
        <H3>runtime: {this.state.runtime}</H3>
      </ContentContainer>
      <ImageContainer>
        <Image src={this.state.image} alt="" />
      </ImageContainer>
    </Movie>
  );
}

const Movie = glamorous.div({
  display: "flex",
  alignSelf: "center",
  padding: size.large,
  width: "50rem",
  color: colour.blue,
  background: colour.yellow,
  boxShadow: `4px 4px 4px ${colour.blue}`
});

const ContentContainer = glamorous.div({
  width: "60%",
  paddingRight: size.medium,
  borderRight: `3px solid ${colour.red}`
});

const ImageContainer = glamorous.div({
  width: "300px",
  height: "450px",
  paddingLeft: size.medium
});

const Image = glamorous.img({
  width: "100%",
  height: "100%"
});

const H1 = glamorous.h1({
  fontFamily: "Open Sans, sans-serif",
  fontVariant: "small-caps"
});

const H3 = glamorous.h3({
  fontVariant: "small-caps"
});

export default Movies;
