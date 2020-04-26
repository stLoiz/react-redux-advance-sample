import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (arg) => {
  return {
    type: actionTypes.ADD,
    value: arg,
  };
};

export const subtract = (arg) => {
  return {
    type: actionTypes.SUBTRACT,
    value: arg,
  };
};
