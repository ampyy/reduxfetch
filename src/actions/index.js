import axios from "axios";

const FETCH_POST_START = "FETCH_POST_START";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
const FETCH_POST_FAIL = "FETCH_POST_FAIL";

const fetchPostStart = () => ({
  type: FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  payload: posts,
});

const fetchPostFail = (error) => ({
  type: FETCH_POST_FAIL,
  payload: error,
});


export function fetchPosts(num) {
  return function (dispatch) {
    dispatch(fetchPostStart());
    axios
      .get(`https://reqres.in/api/users?page=${num}`)
      .then((response) => {
        const posts = response.data.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error.message));
      });
  };
}
