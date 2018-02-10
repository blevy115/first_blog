import React, { Component } from 'react';
import Comment from './Comment.js'
import Author from './Author.js'


class Post extends Component {

  constructor(props){
    super()
    this.state = {
      body: props.body
    }
  }

  changeBody(e){
    this.setState({
      body: prompt ("What should the new body be?")
    })
  }


  handleFormInput(e){
    this.setState({
      body: e.target.value
    })
  }


  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    let authors = [
      <Author author={this.props.allAuthors[0]} />,
      <Author author={this.props.allAuthors[1]} />,
      <Author author={this.props.allAuthors[2]} />,
    ]
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{authors}</p>
        <p>{this.state.body}</p>
        <button onClick= {(e) => this.changeBody(e)}>Change Body</button>
        <input type="text" onChange={(e) => this.handleFormInput(e)} />
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
