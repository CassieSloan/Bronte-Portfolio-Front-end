import React, { Component } from "react";
import axios from "axios";
import "./../../styles/blog.scss";

class Blog extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/posts`
    );
    let posts = response.data;
    console.log(posts);

    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="blog-post-container">
          <div className="text-container">
            {posts.reverse().map(post => {
              return (
                <>
                  <div className="image-container">
                    <img src={post.imageUrl} alt={post.imageName} />
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <button>See more</button>
                  {/* click for full page view with post.body */}
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
