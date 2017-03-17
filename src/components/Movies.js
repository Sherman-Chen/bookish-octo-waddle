import React, { Component } from 'react';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbIDs: null
    };
    this.handleDetails = this.handleDetails.bind(this);
  }

  handleDetails() {
    console.log('here');
  }

  componentWillMount() {
    let { movies } = this.props;

    let mappedImdbIds = movies.map((movie) => {
      return movie.imdbID;
    });

    this.setState({
      imdbIDs: mappedImdbIds
    });
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
      console.log(`${movie.imdbID}` === `${this.state.imdbIDs[index]}`);
      return (
        <section key={movie.imdbID}>
          <h3>{movie.Title} - {movie.Year}</h3>
          <img src={`${movie.Poster}`} alt={`Movie Poster for ${movie.Title}`}></img>
          <button onClick={this.handleDetails}>Details</button>
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