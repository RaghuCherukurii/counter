import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>

        <script>
          {
            // alert("OK")
          }
        </script>
        <input type="text" value={this.state.count} />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
