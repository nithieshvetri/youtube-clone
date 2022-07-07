import React, { Component } from "react";

class ErroBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  render() {
    if (this.state.error) {
      return <h1>something is wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErroBoundary;
