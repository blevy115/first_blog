import React, { Component } from 'react';

class Movie extends Component {

  constructor(props){
    super()
    this.state = {
      fav: props.fav
    }
  }

  render() {
    return (
      <div id='Movie'>
        <h2>Favourite Movie</h2>
        <p>My favourite Movie is {this.state.fav} </p>
      </div>
    )
  }
}

export default Movie;
