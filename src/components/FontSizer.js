import React from "react";

class FontSizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 20
    };
  }

  crement = amt => {
    this.setState({
      counter: this.state.counter + amt
    });
  };

  render() {
    return (
      <div
        className="counter"
        style={{ fontFamily: "sans-serif", textAlign: "center" }}
      >
        <h2 style={{ fontSize: `${this.state.counter}px`, fontWeight: "100" }}>
          {this.state.counter}px
        </h2>
        <button
          style={{
            marginTop: "10px",
            color: "white",
            background: "pink",
            outline: "none",
            border: "1px solid transparent",
            borderRadius: "5px"
          }}
          onClick={() => this.crement(5)}
        >
          Grow
        </button>
        <button
          style={{
            marginTop: "10px",
            color: "white",
            background: "#99b3ff",
            outline: "none",
            border: "1px solid transparent",
            borderRadius: "5px"
          }}
          onClick={() => this.crement(-5)}
        >
          Shrink
        </button>
      </div>
    );
  }
}

export default FontSizer;
