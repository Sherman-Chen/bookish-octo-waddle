import React, { Component } from 'react';
import axios from 'axios';

import Movies from './Movies';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://www.omdbapi.com/?s=',
      searchResult: '',
      isFetched: false,
      fetchFailed: false,
      movies: null
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchResult: event.target.value
    });
  }

  handleSearchSubmit(event) {
    
    // combine url with search to send AJAX to omdb to grab list of movies
    axios.get(`${this.state.url}${this.state.searchResult}`)
      .then(response => {
        if (response.data.Response === 'True') {
          this.setState({
            movies: response.data.Search,
            isFetched: true,
            fetchFailed: false
          });
        } else {
          this.setState({
            fetchFailed: true,
            isFetched: false
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    // reset search param
    this.setState({
      searchResult: ''
    });
    event.preventDefault();
  }

  render() {
    return(
      <main>
        <h1>Search for Movies or TV Series!</h1>
        <form>
          <label>
            <input type="text" value={this.state.searchResult} onChange={this.handleSearchChange} />
          </label>
          <button onClick={this.handleSearchSubmit}>Search</button>
        </form>
        {this.state.isFetched && <Movies movies={this.state.movies} />}
        {this.state.fetchFailed && <h1>No Results Found - Please Try Again</h1>}
      </main>
    )
  }
};