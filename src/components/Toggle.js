import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: true
    };
  }

  handleClick() {
    this.setState({
      greeting: !this.state.greeting
    });
  }

  render() {
    return (
      <div class="nonsense" style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>
          {this.state.greeting ? "Hello" : "Goodbye"}
        </h1>
        <button
          style={{
            marginTop: "10px",
            color: "white",
            background: "#3366ff",
            outline: "none",
            border: "1px solid transparent",
            borderRadius: "5px"
          }}
          onClick={() => this.handleClick()}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Toggle;
