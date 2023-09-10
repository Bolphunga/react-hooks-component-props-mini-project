import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.posts.name}/>
      <About image={blogData.posts.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
