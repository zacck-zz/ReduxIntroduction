var redux = require('redux');

//make a default obj
var stateDefault ={
  searchText: '',
  showCompleted: false,
  todos: []
};
//create reducer and make state optional
var todoReducer = (state = stateDefault , action) => {

  //switch on all the actions and take the approp steps
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...stateDefault,
        searchText: action.searchText
      }
      break;
    default:
      return state;
  }

  //return the state
  return state;
};

//create store that takes in a reducer
var todoStore = redux.createStore(todoReducer);

//get modified state from the store
var currentState = todoStore.getState();

//log out our state
console.log(currentState);


//dispatch action to the store
todoStore.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new'
});

console.log('searchtext should be new ', todoStore.getState())
