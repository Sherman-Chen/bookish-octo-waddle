import React, { Component } from 'react';
import axios from 'axios';

import Movies from './Movies';
import FailedSearch from './FailedSearch';

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
    // prevent default behavior
    event.preventDefault();
  }

  render() {
    return(
      <main className="home-container">
        <section className="searchbox-container">
          <header className="header-container">
            <h1 className="heading">Search for Movies or TV Series!</h1>
          </header>
          <form className="searchbar">
            <label>
              <input type="text" value={this.state.searchResult} onChange={this.handleSearchChange} className="search-input"/>
            </label>
            <button onClick={this.handleSearchSubmit} className="search-button">Search</button>
          </form>
        </section>
        {this.state.isFetched && <Movies movies={this.state.movies} />}
        {this.state.fetchFailed && <FailedSearch />}
      </main>
    )
  }
};