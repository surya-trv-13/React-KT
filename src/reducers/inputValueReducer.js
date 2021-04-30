import { INPUT_TYPE } from "../actions/actionType";

const initialState = {
  data: "0"
};

const inputValueReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_TYPE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default inputValueReducer;
