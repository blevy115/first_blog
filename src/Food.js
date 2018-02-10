import React, { Component } from 'react';

class Food extends Component {

  constructor(props){
    super()
    this.state = {
      fav: props.fav
    }
  }

  render() {
    return (
      <div id='Food'>
        <h2>Favourite Food</h2>
        <p>I Love {this.state.fav}!!!</p>
      </div>
    )
  }
}

export default Food;
