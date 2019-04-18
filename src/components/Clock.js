import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  tick() {
    this.setState(state => ({
      time: new Date()
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "black" }}>
          {this.state.time.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default Clock;
