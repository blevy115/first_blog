import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shakesPeare:""
    }
  }

  componentDidMount() {
    var base = this;
    let poemApi = 'http://shakeitspeare.com/api/poem'
    fetch(poemApi)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        base.setState ({ shakesPeare: json.poem})
      })
      .catch((ex) => {
        console.log('There was an error', ex);
      })
    }

  render() {
    let poetry = this.state.shakesPeare;
    if (this.state.shakesPeare){
      return (
        <div>
        <h1>My favorite Shakespeare poem:</h1>
        <h2>{poetry}</h2>
        </div>
      )
    }
    return (
      <div>
        <h1>My favorite Shakespeare poem:</h1>
        <h2>Loading ...</h2>
      </div>
    )
  }
}

export default Home;
