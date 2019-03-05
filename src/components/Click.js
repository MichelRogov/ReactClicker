import React, { Component } from 'react';
import { createStore } from "redux";

class Click extends Component {

    constructor() {
        super();

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.updateStore = this.updateStore.bind(this);

        const counter = (state = 0, action) => {
            switch (action.type) {
                case "INCREMENT":
                    return state + 1;
                case "DECREMENT":
                    return state - 1;
                case "RESET":
                    return 0;
                default:
                    return state;
            }
        };

        this.store = createStore(counter);
        this.state = {
            count: this.store.getState()
        };
        this.store.subscribe(this.updateStore);
    }

    updateStore() {
        this.setState({count: this.store.getState()});
    }

    incrementCount() {
        this.store.dispatch({ type: "INCREMENT"});
    }

    decrementCount() {
        this.store.dispatch({ type: "DECREMENT"});
    }

    resetCount() {
        this.store.dispatch({ type: "RESET"});
    }

    render() {
        return (
            <div className="container">
                <div className="clicker border border-secondary rounded">
                    <div className="clicker-display d-flex align-items-center bg-light text-secondary">
                        <div className="mx-auto display-1">{this.state.count}</div>
                    </div>
                    <div className="clicker-button-panel d-flex flex-row">
                        <button className="btn btn-success w-100" onClick={ () => this.store.dispatch({ type: "INCREMENT"})}>
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                        <button className="btn btn-warning w-100" onClick={this.resetCount}>
                            <i className="fa fa-refresh fa-2x"></i>
                        </button>
                        <button className="btn btn-danger w-100" onClick={this.decrementCount}>
                            <i className="fa fa-minus fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Click;
