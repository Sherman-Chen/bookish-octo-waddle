import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://www.omdbapi.com/?i=${this.props.match.params.movie}&plot=full`,
      movie: null
    };
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(response => {
        this.setState({
          movie: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {  
    let { movie } = this.state;
    console.log(this.state.movie);

    return (
      this.state.movie && 
      <main>
        <h1>{movie.Title} - {movie.Year}</h1>
        <img src={movie.Poster} alt={`Show Poster for ${movie.Title}`}/>
        <p>{movie.Plot}</p>
        <Link to="/">Search for Another Movie</Link>
      </main>
    )
  }
};

MovieDetails.propTypes = {
  match: React.PropTypes.object
};