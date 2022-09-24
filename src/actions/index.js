import axios from "axios";

export const FETCH_POST_START = "FETCH_POST_START";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAIL = "FETCH_POST_FAIL";

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


export const fetchPosts = (posts, page) => (dispatch) => {
  dispatch(fetchPostStart())
  axios
    .get(`https://reqres.in/api/users?page=${page}`)
    .then((response) => {
          dispatch(fetchPostSuccess([...posts, ...response.data.data]))
      })
    .catch(error => {
      dispatch(fetchPostFail(error.message))
    })
};