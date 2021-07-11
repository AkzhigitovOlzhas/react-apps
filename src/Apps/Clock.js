import React from "react";

const styles = {
  clock: {
    background: "black",
    color: "white",
    padding: "20px",
  }, 
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), count: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date(), count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={styles.clock}>
        <h2>Now time: {this.state.date.toLocaleTimeString()}.</h2>
        <p>{this.state.date.toDateString()}</p>
      </div>
    );
  }
}

export default Clock;
