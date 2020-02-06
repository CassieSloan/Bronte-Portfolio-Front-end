import React, { Component } from "react";
import axios from "axios"; //hit backend api
import "./../../styles/blog.scss";
import LoadingAnimation from "../LoadingAnimation";

class Blog extends Component {
  state = {
    posts: [],
    loading: false
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/posts`
      );
      let posts = response.data;
      console.log(posts);

      this.setState({ posts });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <>
        {loading && <LoadingAnimation />}
        <div className="blog-post-container">
          <div className="text-container">
            {posts.reverse().map(post => {
              return (
                <>
                  <div
                    className="image-container"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  ></div>

                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <button aria-label="see more">See more</button>
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
