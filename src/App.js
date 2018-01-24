import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <h3>{this.props.body}</h3>
        <h2>Comments:</h2>
        <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

export default Post;