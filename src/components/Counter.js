import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  crement = amt => {
    this.setState({
      count: this.state.count + amt
    });
  };

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // };

  render() {
    return (
      <div className="counter" style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>{this.state.count}</h1>
        <button
          style={{
            marginTop: "10px",
            color: "white",
            background: "#79d279",
            outline: "none",
            border: "1px solid transparent",
            borderRadius: "5px"
          }}
          onClick={() => this.crement(1)}
        >
          Add
        </button>
        <button
          style={{
            marginTop: "10px",
            color: "white",
            background: "#003399",
            outline: "none",
            border: "1px solid transparent",
            borderRadius: "5px"
          }}
          onClick={() => this.crement(-1)}
        >
          Sub
        </button>
      </div>
    );
  }
}

export default Counter;
