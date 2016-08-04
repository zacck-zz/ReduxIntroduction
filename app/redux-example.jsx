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
var reducer =  (state = stateDefault, action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [...state.hobbies,{
          id: nextHobbyId++,
          hobby: action.hobby
        }]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            title: action.title,
            genre: action.genre,
            id: nextMovieId++
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      };
    default:
        return state;
  }
};
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
  type: 'CHANGE_NAME',
  name: 'Emily'
});
