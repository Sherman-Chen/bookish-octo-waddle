import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
  render() {

    let { movies } = this.props;

    let mappedMovies = movies.map((movie, index) => {
      return (
        <section key={movie.imdbID}>
          <h3>{movie.Title} - {movie.Year}</h3>
          <fig>
            <img src={`${movie.Poster}`} alt={`Show Poster for ${movie.Title}`}></img>          
          </fig>
          <p><Link to={`/movie/${movie.imdbID}`}>Learn more about {movie.Title}</Link></p>
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

Movies.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object)
};