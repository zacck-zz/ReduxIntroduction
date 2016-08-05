var redux = require('redux');

console.log('starting redux');

//object tha represents application
//takes in a pure function 'a reducer'
//a reducer takes the existing state and actions as arguments
// and computes the new state
var stateDefault = {
  name: 'Anon',
  hobbies: [],
  movies: []
}

//id of item
var nextHobbyId = 1;
//id of movie
var nextMovieId = 1;
//make the state an optional variable
//multiple reducers
var nameReducer = (state = 'Anon', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  };
};

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
//challenge movies reducer
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
store.dispatch({
  /*this is a required attribute of an action */
  type: 'CHANGE_NAME',
  /*takin the action here using this attribute*/
  name: 'Zacck'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

//remover action
store.dispatch({
  type:'REMOVE_HOBBY',
  id: 2
});


//add to an array in the state
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Matrix',
  genre: 'Action Thriller'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Horror',
  genre: 'Horror'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});
