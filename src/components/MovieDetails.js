import React, { Component } from 'react';

// const MovieDetails = props => {
//   console.log('these are my props');
//   console.log(props.match.params.movie);
//   return (
//     <h1>test</h1>
//   )
// };

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('MOVIE DETAILS MOUNTED');
  }

  render() {
    console.log(this.props)
    return (
      <h1>{this.props.match.params.movie}</h1>
    )
  }
};