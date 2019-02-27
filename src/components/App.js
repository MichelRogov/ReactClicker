import React, { Component } from 'react';
import Click from './Click.js';
import Header from './Header.js';

export default class ClickerApp extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clicker'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title}/>
                <div className="mt-5">
                    <Click/>
                </div>
            </div>
        );
    }
}
