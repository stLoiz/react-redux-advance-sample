import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: [],
};

const removeResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.id,
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.value }),
      });
    case actionTypes.REMOVE_RESULT:
      return removeResult(state, action);
  }

  return state;
};

export default reducer;
