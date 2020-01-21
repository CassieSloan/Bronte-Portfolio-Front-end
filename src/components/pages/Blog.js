import React, { Component } from "react";
import axios from "axios";
import "./../../styles/blog.scss";

class Blog extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/posts/");
    let posts = response.data;
    console.log(posts);

    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="blog-post-container">
          <div className="image-container">{/* insert image url here */}</div>
          <div className="text-container">
            {posts.map(post => {
              return (
                <>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <button>See more</button>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
