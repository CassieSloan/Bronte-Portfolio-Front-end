import React, { Component } from "react";
import "./../../styles/contact.scss";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

class Contact extends Component {
  state = {
    name: "",
    from: "",
    number: "",
    text: ""
  };

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
    const { name, from, number, text } = this.state;
    return (
      <>
        <div className="flexbox">
          {/* image and text */}
          <div className="info">
            <div className="image-container">
              <img
                src="data:image/jpeg;base64,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"
                alt="portrait of photographer, Bronte"
              />
            </div>
            <p>
              Gummi bears apple pie gummies carrot cake soufflé chocolate cake
              gummi bears. Powder cookie gummi bears cupcake wafer chocolate bar
              oat cake. Jujubes brownie candy pudding jelly beans ice cream.
              Brownie bear claw sweet brownie sugar plum jelly beans lemon drops
              candy canes. Cupcake cotton candy candy canes fruitcake cheesecake
              jelly-o.
            </p>
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
