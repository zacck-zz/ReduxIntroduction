var redux = require('redux');
var thunk = require('redux-thunk').default;

var{searchTextReducer, todosReducer, movieReducer, mapReducer} = require('./../reducers/index');
export var configure = () => {
  //new reducer
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    movies: movieReducer,
    map: mapReducer
  })

  var store = redux.createStore(reducer, redux.compose(
    /*check if developer tools exist and if they do call them as a function
    *also apply middle ware
    */
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
