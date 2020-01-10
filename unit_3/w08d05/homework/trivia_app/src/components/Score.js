import React, { Component } from 'react';


class Score extends Component {
    constructor() {
        super();

        this.state = {
            score: 0,
        }
        this.reset = this.reset.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    reset() {
        this.setState({ score: 0 })
    }

    increase() {
        this.setState({ score: this.state.score + 1 })
    }

    decrease() {
        this.setState({ score: this.state.score - 1 })
    }

    render() {
        return (
            <div>
                <h2>Score: {this.state.score}</h2>
                <button className="btn" onClick={this.decrease}>Decrease</button>
                <button className="btn" onClick={this.increase}>Increase</button>
                <button className="btn" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
export default Score;