import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.handleDetails = this.handleDetails.bind(this);
  }

  handleDetails(movieID) {
    console.log(movieID);
  }

  render() {
    /*
    Title,
    imdbID,
    Poster,
    Year,
    Type

    <button onClick={() => {this.handleDetails(movie.imdbID)}}>Details</button>
    */

    let { movies } = this.props;

    let mappedMovies = movies.map((movie, index) => {
      return (
        <section key={movie.imdbID}>
          <h3>{movie.Title} - {movie.Year}</h3>
          <img src={`${movie.Poster}`} alt={`Movie Poster for ${movie.Title}`}></img>          
          <Link to={`/movie/:${movie.imdbID}`}>testing props passing</Link>
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