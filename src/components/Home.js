import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://www.omdbapi.com/?t=',
      searchResult: ''
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

    console.log(this.state.searchResult);
    
    // reset search param
    this.setState({
      searchResult: ''
    });
    event.preventDefault();
  }

  render() {
    return(
      <main>
        <Link to="/test">Go to Test</Link>
        <h1>HELLO MAIN TACOCAT</h1>
        <form>
          <label>
            <input type="text" value={this.state.searchResult} onChange={this.handleSearchChange} />
          </label>
          <button onClick={this.handleSearchSubmit}>Search</button>
        </form>
      </main>
    )
  }
};