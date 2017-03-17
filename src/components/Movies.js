import React, { Component } from 'react';

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.handleDetails = this.handleDetails.bind(this);
  }

  handleDetails(movieID) {
    console.log('here ' + movieID);
  }

  render() {
    /*
    Title,
    imdbID,
    Poster,
    Year,
    Type
    */

    let { movies } = this.props;

    let mappedMovies = movies.map((movie, index) => {
      return (
        <section key={movie.imdbID}>
          <h3>{movie.Title} - {movie.Year}</h3>
          <img src={`${movie.Poster}`} alt={`Movie Poster for ${movie.Title}`}></img>
          <button onClick={() => {this.handleDetails(movie.imdbID)}}>Details</button>
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