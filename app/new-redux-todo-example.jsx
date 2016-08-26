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



var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

var todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: nextTodoId++
        }
      ];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
     return state;
  }
}

var movieReducer = (state = [], action) =>  {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          name: action.name,
          genre: action.genre,
          id: nextMovieId++
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

//new reducer
var reducer = redux.combineReducers({
  searchText: searchTextReducer,
  todos: todosReducer,
  movies: movieReducer
})

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
  type: 'ADD_TODO',
  text: 'Draw money for Sylvia'
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
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 201
})

console.log('current state after unsubscribe and add todo ', store.getState());
