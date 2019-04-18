import React from "react";

class ShowHide extends React.Component {
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
          {this.state.greeting ? "Hello" : null}
        </h1>
        <button
          style={{
            marginTop: "10px",
            color: "black",
            background: "#ffff00",
            outline: "none",
            border: "1px solid transparent",
            borderRadius: "5px"
          }}
          onClick={() => this.handleClick()}
        >
          {this.state.greeting ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default ShowHide;
