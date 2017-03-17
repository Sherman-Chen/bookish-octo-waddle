import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://www.omdbapi.com/?t=',
      searchResult: ''
    };
  }

  handleSearch(event) {

  }

  handleSubmit() {
    
  }

  render() {
    return(
      <main>
        <Link to="/test">Go to Test</Link>
        <h1>HELLO MAIN TACOCAT</h1>
        <form>
          <label>
            <input type="text"/>
          </label>
        </form>
      </main>
    )
  }
};