var redux = require('redux');

//make a default obj
var stateDefault ={
  searchText: '',
  showCompleted: false,
  todos: []
};
//create reducer and make state optional
var todoReducer = (state = stateDefault , action) => {

  //return the state
  return state;
};

//create store that takes in a reducer
var todoStore = redux.createStore(todoReducer);

//get modified state from the store
var currentState = todoStore.getState();

//log out our state
console.log(currentState);
