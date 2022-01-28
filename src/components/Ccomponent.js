import { Button, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-aria-label="text primary button group">
          <Button onClick={this.increment}>increment</Button>
          <Button onClick={this.decrement}>decrement</Button>
          <Button onClick={this.reset}>reset</Button>
        </ButtonGroup>

        <h1>Current: {this.state.count}</h1>
      </Box>
    );
  }
}
