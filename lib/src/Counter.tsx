import { Component } from "react";

export type CounterProps = {
  initialCount: number;
};

export class LegacyCounter extends Component<CounterProps> {
  state: {
    count: number;
  };

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>
          Increment legacy: {this.state.count}
        </button>
      </div>
    );
  }
}
