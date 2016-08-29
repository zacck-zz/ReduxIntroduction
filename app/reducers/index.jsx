
export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};


var nextTodoId = 1;
export var todosReducer = (state = [], action) => {
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


var nextMovieId = 200;
export var movieReducer = (state = [], action) =>  {
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


export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
}
