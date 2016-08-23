var redux = require('redux');

console.log('redux loaded');

var mState =  {
  searchText: 'Dog',
  showCompleted: 'true',
  todos: [
    {
      id: 1,
      text: 'go see client',
      createdAt: 1235
    },
    {
      id: 2,
      text: 'work on redux',
      createdAt: 19799
    }
  ]
}

var reducer = (state = mState, action) => {

  //always return state
  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('current todostate ', currentState);
