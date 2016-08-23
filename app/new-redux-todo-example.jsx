var redux = require('redux');

console.log('redux loaded');

var mState =  {
  searchText: '',
  showCompleted: 'false',
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
    },
    {
      id: 3,
      text: "walk the Dog",
      createdAt: 179739
    }
  ]
}

var reducer = (state = mState, action) => {

  //switch searh types
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      //always return state
      return state;

  }
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current todostate ', currentState);


var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
}

store.dispatch(action);

console.log('search text should be dog ', store.getState());
