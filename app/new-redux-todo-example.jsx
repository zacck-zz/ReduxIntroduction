var redux = require('redux');

console.log('redux loaded');

//Search reducer and action generator
//----------------------------------
var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

//actiongen
//----------------------------------
var changeSearchText =  (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  }
};

//todos Reducer and action gen
//----------------------------------
var nextTodoId = 1;
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
//action gens
var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};

var removeTodo  = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}


//movies reducer anad action gen
//----------------------------------
var nextMovieId = 200;
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

//action generators
var addMovie = (name, genre) => {
  return {
    type: 'ADD_MOVIE',
    name,
    genre
  }
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
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

store.dispatch(changeSearchText('dog'));

store.dispatch(changeSearchText('new new'));


unsubscribe();
store.dispatch(changeSearchText('new new text'));


store.dispatch(addTodo('Go Buy Skate Wheels'));

store.dispatch(addTodo('Draw Money for Sylvia'));

store.dispatch(addMovie('Avengers Age of Ultron', 'Action'));
store.dispatch(addMovie('Marvel Something', 'Action'));

store.dispatch(removeTodo(2));

store.dispatch(removeMovie(201))

console.log('current state after unsubscribe and add todo ', store.getState());
