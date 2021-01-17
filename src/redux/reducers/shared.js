import { SET_LOADING } from "../types/shared";

const initialState = {
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;
    default:
      return state;
      break;
  }
};
