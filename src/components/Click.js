import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Click extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    decrementCount() {
        this.setState(prevState => ({count: prevState.count - 1}));
    }

    resetCount() {
        this.setState({count: 0})
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

Click.defaultProps = {
    count: 0
};

Click.propTypes = {
    count: PropTypes.number
};

export default Click;
