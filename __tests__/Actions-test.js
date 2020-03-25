import {moviesActions} from '../src/config/actions';

describe('movie action creator', () => {
  it('return the expected value', () => {
    const UPDATE_LIST_MOVIES = 'UPDATE_LIST_MOVIES';
    const expectedResult = {
      type: UPDATE_LIST_MOVIES,
      newData: [
        {
          id: 1,
          name: 'Movie name',
          watchers: 100,
        },
      ],
    };

    expect(
      moviesActions([
        {
          id: 1,
          name: 'Movie name',
          watchers: 100,
        },
      ]),
    ).toEqual(expectedResult);
  });
});
