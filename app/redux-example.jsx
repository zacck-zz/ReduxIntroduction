var redux = require('redux');

console.log('starting redux');

//Name Reducers and Action Generators
//-----------------------------------
var nameReducer = (state = 'Anon', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  };
};

//ActionGenerator
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
//---------------------------
//movies reducer and action generators
//id of item
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
        id: nextHobbyId++,
        hobby: action.hobby
      }];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

//Action generators
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  }
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};


//-----------------------------
//challenge movies reducer
//id of movie
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          title: action.title,
          genre: action.genre,
          id: nextMovieId++
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

//add movies Action Generator
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};
//remove movie Action generator
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

//combineReducer takes one object argument
//the object contains key value pairs of reducers
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes or listen
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New State', store.getState());
});

//unsubscribe();

var currentState = store.getState();

console.log('currentState', currentState);


/*dispatch an action to the store*/
store.dispatch(changeName('Zacck'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('walking'));

//remover action
store.dispatch(removeHobby(2));


//add to an array in the state
store.dispatch(addMovie('Mad Max', 'Action Extreme'));
store.dispatch(addMovie('Zacck The Hack ', 'suspense'));

store.dispatch(removeMovie(2));

store.dispatch(changeName('Emily'));
