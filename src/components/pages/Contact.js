import React, { Component } from "react";
import "./../../styles/contact.scss";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import bronte2 from "./../../images/bronte2.jpeg";
import LoadingAnimation from "../LoadingAnimation";

class Contact extends Component {
  state = {
    name: "",
    from: "",
    number: "",
    text: "",
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { name, from, number, text } = this.state;

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/email`, {
        name,
        from,
        number,
        text
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { name, from, number, text, loading } = this.state;
    return (
      <>
        {loading && <LoadingAnimation />}
        <div className="contact-flexbox">
          {/* image and text */}
          <div className="info">
            <div className="image-container">
              <img src={bronte2} alt="portrait of photographer, Bronte" />
            </div>
            <section className="text-container">
              <p>Available for hire for:</p>
              <ul>
                <li>Parties</li>
                <li>Test shoots/portfolios</li>
                <li>Gif commisions</li>
                <li>Weddings</li>
                <li>Events</li>
                <li>Editorial/Magazine</li>
                <li>Product shooting</li>
                <li>Ecommerce</li>
              </ul>
            </section>
          </div>

          {/* form fill out */}

          <form className="form">
            <TextField
              className="input"
              name="name"
              value={name}
              onChange={this.onInputChange}
              id="outlined-multiline-flexible"
              label="Name"
              variant="outlined"
            />

            <TextField
              className="textarea"
              name="from"
              value={from}
              onChange={this.onInputChange}
              id="outlined-multiline-flexible"
              label="Email"
              variant="outlined"
            />

            <TextField
              className="input"
              name="number"
              value={number}
              onChange={this.onInputChange}
              id="outlined-multiline-flexible"
              label="Phone Number"
              variant="outlined"
            />

            <TextField
              className="input"
              id="outlined-multiline-flexible"
              name="text"
              label="Message"
              multiline
              rowsMax="4"
              value={text}
              onChange={this.onInputChange}
              variant="outlined"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            {/* submit button */}
            <input
              className="submit-button"
              type="submit"
              value="send message"
              onSubmit={event => this.onFormSubmit(event)}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Contact;
