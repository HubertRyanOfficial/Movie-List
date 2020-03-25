const UPDATE_LIST_MOVIES = 'UPDATE_LIST_MOVIES';

export const moviesActions = value => ({
  type: UPDATE_LIST_MOVIES,
  newData: value,
});
