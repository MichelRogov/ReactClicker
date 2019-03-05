import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './styles/app.scss';

ReactDOM.render(<App />, document.getElementById('app'));


// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
// };
//
// console.log(counter(1,{type: "INCREMENT"}));
// console.log(counter(1,{type: "DECREMENT"}));
// console.log(counter(0, {type: "ABRAKADABRA"}));
//
//
// const createStore = (reducer) => {
//     let state;
//     let listeners = [];
//
//     const getState = () => state;
//
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//
//     const subscribe = (listener) => {
//         listeners.push(listener);
//     };
//
//     dispatch({});
//
//     return { getState, dispatch, subscribe };
// };
//
// const store = createStore(counter);
//
// console.log(store.getState());
//
// store.subscribe(() => {
//     document.body.innerText = store.getState();
// });
//
// document.addEventListener('click', () => {
//     store.dispatch({ type: "INCREMENT"});
// });
//
// const observable = [];
//
// function subscribe (observer) {
//     observable.push(observer);
// }
//
// function notify () {
//     const text = "from observer";
//     observable.forEach(obs => obs(text));
// }
//
// subscribe(console.log);
//
// notify();
//
