var redux = require('redux');

console.log('starting redux examples');

//this is a function that takes in the current state
//and an action and computes the new state
var reducer = (state = {name: 'anonymous'}/*existing state before action triggered*/,
  action/*this is the action called*/) => {
    switch(action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
      default:
      //returns state even if there is no action or the action is not recognised
        return state;
    }
};


//create a store
var store = redux.createStore(reducer);

//returns new state
var currentState = store.getState();

console.log('currentState', currentState);

//actions
//actions are dispatched in reducers with state to return new state
var action = {
  type: 'CHANGE_NAME',
  name: 'Zacck'
}

//use this method to dispatch actions
store.dispatch(action);

//output new ste
console.log('Name should be Zacck' store.getState())
