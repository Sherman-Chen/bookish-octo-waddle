import React, { Component } from 'react';

export default class Movies extends Component {
  render() {
    /*
    Title,
    Rated,
    Released,
    Director,
    Plot,
    Poster
    */


    let { movies } = this.props;

    let mappedMovies = movies.map((movie) => {
      return (
        <section key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={`${movie.Poster}`}></img>
        </section>
      )
    });

    return(
      <section>
        { mappedMovies }
      </section>
    )
  }
};