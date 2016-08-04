var redux = require('redux');

console.log('starting redux');

//object tha represents application
//takes in a pure function 'a reducer'
//a reducer takes the existing state and actions as arguments
// and computes the new state

//make the state an optional variable
var reducer =  (state = {name: 'Anonymous'}, action) => {
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);
