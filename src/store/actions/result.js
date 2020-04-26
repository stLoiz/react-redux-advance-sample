import * as actionTypes from './actionTypes';

export const saveResult = (arg) => {
  return {
    type: actionTypes.STORE_RESULT,
    value: arg,
  };
};

export const storeResult = (arg) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(arg));
    }, 2000);
  };
};

export const removeResult = (arg) => {
  return {
    type: actionTypes.REMOVE_RESULT,
    id: arg,
  };
};
