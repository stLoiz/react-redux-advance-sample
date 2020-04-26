export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const add = (arg) => {
  return {
    type: ADD,
    value: arg,
  };
};
export const subtract = (arg) => {
  return {
    type: SUBTRACT,
    value: arg,
  };
};
export const store_result = (arg) => {
  return {
    type: STORE_RESULT,
    value: arg,
  };
};

export const remove_result = (arg) => {
  return {
    type: REMOVE_RESULT,
    id: arg,
  };
};
