import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title:"Dinosaurs are Awesome",
  author:"Stealth Stegasaurus",
  body:"Check out this property",
  comments:["First!", "Great post", "Hire this author now!"],
  authors:["Au1", "Au2", "Au3"]
}


ReactDOM.render(<Post
  title={post.title}
  author={post.author}
  allAuthors={post.authors}
  body={post.body}
  comments={post.comments}
  />, document.getElementById('root'));
registerServiceWorker();
