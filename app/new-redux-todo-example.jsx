var redux = require('redux');

console.log('redux loaded');

var mState =  {
  searchText: '',
  showCompleted: 'false',
  todos: [
    {
      id: 19999,
      text: 'go see client',
      createdAt: 1235
    },
    {
      id: 2000,
      text: 'work on redux',
      createdAt: 19799
    },
    {
      id: 30000,
      text: "walk the Dog",
      createdAt: 179739
    }
  ],
  movies: []
}

var nextTodoId = 1;

var nextMovieId = 200;

var reducer = (state = mState, action) => {
  //switch searh types
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'ADD_TODO':
      return {
        ...state,
        /*set the todos array equal to current array
        and add the new todo */
        todos:[
          ...state.todos,
          {
            text: action.text,
            id: nextTodoId++
          }
        ]
      };
    case 'REMOVE_TODO':
     return {
       ...state,
       todos: [
         ...state.todos.filter((todo) => todo.id !== action.id)
       ]
     };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            name: action.name,
            genre: action.genre,
            id: nextMovieId++
          }
        ]
      };
    default:
      //always return state
      return state;

  }
}

var store = redux.createStore(reducer, redux.compose(
  /*check if developer tools exist and if they do call them as a function*/
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to change

var unsubscribe =  store.subscribe(() => {
  var state = store.getState();

  console.log('searchtext is ', state.searchText);
});

var currentState = store.getState();
console.log('current todostate ', currentState);


var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
}

store.dispatch(action);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new text'
});


unsubscribe();
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new new text'
});


store.dispatch({
  type: 'ADD_TODO',
  text: 'Go Buy skate wheels'
});

store.dispatch({
  type:'ADD_MOVIE',
  name: 'Avengers of Ultron',
  genre: 'Action'
});
store.dispatch({
  type:'ADD_MOVIE',
  name: 'Marvel Something',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_TODO',
  id: 30000
});

console.log('current state after unsubscribe and add todo ', store.getState());
