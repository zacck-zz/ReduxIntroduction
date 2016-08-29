var redux = require('redux');

console.log('redux loaded');

var actions = require('./actions/index');

var store = require('./store/configureStore').configure();

//Subscribe to change
var unsubscribe =  store.subscribe(() => {
  var state = store.getState();
  console.log('searchtext is ', state.searchText);

  if(state.map.isFetching) {
    console.log('Loading ....');
  }
  else if (state.map.url) {
    console.log('Fetched');
  }
});

store.dispatch(actions.fetchLocation());

var currentState = store.getState();
console.log('current todostate ', currentState);

store.dispatch(actions.changeSearchText('dog'));

store.dispatch(actions.changeSearchText('new new'));


unsubscribe();
store.dispatch(actions.changeSearchText('new new text'));


store.dispatch(actions.addTodo('Go Buy Skate Wheels'));

store.dispatch(actions.addTodo('Draw Money for Sylvia'));

store.dispatch(actions.addMovie('Avengers Age of Ultron', 'Action'));
store.dispatch(actions.addMovie('Marvel Something', 'Action'));

store.dispatch(actions.removeTodo(2));

store.dispatch(actions.removeMovie(201))

console.log('current state after unsubscribe and add todo ', store.getState());
