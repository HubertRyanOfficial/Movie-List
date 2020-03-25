const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LIST_MOVIES':
      return action.newData;

    default:
      return state;
  }
}
