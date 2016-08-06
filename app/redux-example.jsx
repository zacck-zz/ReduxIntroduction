var redux = require('redux');
console.log('starting redux');

var actions = require('./actions/index');

var store = require('./store/configureStore').configure();


//subscribe to changes or listen
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is ', state.name);
  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">View Your Location</a>'
  }
  console.log('New State', store.getState());
});

//unsubscribe();

store.dispatch(actions.fetchLocation());

var currentState = store.getState();

console.log('currentState', currentState);


/*dispatch an action to the store*/
store.dispatch(actions.changeName('Zacck'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('walking'));

//remover action
store.dispatch(actions.removeHobby(2));


//add to an array in the state
store.dispatch(actions.addMovie('Mad Max', 'Action Extreme'));
store.dispatch(actions.addMovie('Zacck The Hack ', 'suspense'));

store.dispatch(actions.removeMovie(2));

store.dispatch(actions.changeName('Emily'));
