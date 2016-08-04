var redux = require('redux');

console.log('starting redux');

//object tha represents application
//takes in a pure function 'a reducer'
//a reducer takes the existing state and actions as arguments
// and computes the new state

//make the state an optional variable
var reducer =  (state = {name: 'Anonymous'}, action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
      break;
    default:
        return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes or listen
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
});

//unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);


/*dispatch an action to the store*/
store.dispatch({
  /*this is a required attribute of an action */
  type: 'CHANGE_NAME',
  /*takin the action here using this attribute*/
  name: 'Zacck'
});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});
