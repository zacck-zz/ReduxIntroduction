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
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);


/*dispatch an action to the store*/
store.dispatch({
  /*this is a required attribute of an action */
  type: 'CHANGE_NAME',
  /*takin the action here using this attribute*/
  name: 'Zacck'
});

//check that state was changed
console.log('name should be Zacck', store.getState());
