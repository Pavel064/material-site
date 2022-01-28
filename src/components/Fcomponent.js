import { Button, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Fcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <Typography component="h5" color="inherit" paragraph>
            Web Developer Blog Web Developer Blog Web Developer Blog Web
            Developer Blog Web Developer Blog Web Developer Blog Web Developer
            Blog Web Developer Blog Web Developer Blog Web Developer Blog Web
            Developer Blog Web Developer Blog
          </Typography>

          <Button
            onClick={this.handleClick}
            variant="contained"
            color="secondary"
          >
            Hide
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            onClick={this.handleClick}
            variant="contained"
            color="secondary"
          >
            More
          </Button>
        </div>
      );
    }
  }
}
