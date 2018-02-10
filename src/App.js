import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js'
import Author from './Author.js'
import Post from './Post.js'
import Home from './Home.js'
import Food from './Food.js'
import Movie from './Movie.js'
import About from './About.js'

var post = {
  title:"Dinosaurs are Awesome",
  author:"Stealth Stegasaurus",
  body:"Check out this property",
  comments:["First!", "Great post", "Hire this author now!"],
  authors:["Au1", "Au2", "Au3"]
}

var favourites = {
  food: 'Pasta',
  movie: 'Spaceballs'
}


class App extends Component {

render() {
  return(
    <Router>
      <div>
      <nav>
            <Link to="/">Go to Home Page</Link>{' '}
            <Link to="/post">See Our Blog Posts</Link>{' '}
            <Link to="/food">Find out my favourite food</Link>{' '}
            <Link to="/movie">Best Movie ever!!</Link>{' '}
            <Link to="/about">Contact Us!</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={
        () => (
          <Post title={post.title}
           allAuthors={post.authors}
           body={post.body}
           comments={post.comments} />
        )
      }/>
      <Route path="/food" component = {
        () => (
          <Food fav={favourites.food} />
        )
      }/>
      <Route path="/movie" component = {
        () => (
          <Movie fav={favourites.movie} />
        )
      }/>
      <Route path="/about" component={About} />
      </div>
    </Router>
)
  }
}

export default App;
