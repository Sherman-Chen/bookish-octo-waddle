import React, { Component } from 'react';
import axios from 'axios';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://www.omdbapi.com/?i=${this.props.match.params.movie.slice(1)}`,
      movie: null
    };
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(response => {
        this.setState({
          movie: response.data
        });
        console.log(this.state.movie);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {  
    let { movie } = this.state;
    return (
      this.state.movie && 
      <main>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt={`Movie Poster for ${movie.Title}`}/>
      </main>
    )
  }
};