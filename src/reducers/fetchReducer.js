import { FETCH_POST_START, FETCH_POST_SUCCESS, FETCH_POST_FAIL } from "../actions";

const initialState = {
    posts: [],
    loading: false,
    error: "",
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POST_START:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POST_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
          error: ''
        };
      case FETCH_POST_FAIL:
        return {
          posts: [], 
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default postReducer;
  