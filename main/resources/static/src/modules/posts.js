// import { createAction, handleActions } from 'redux-actions';
// import createRequestSaga, {
//   createRequestActionTypes,
// } from '../lib/createRequestSaga';
// import * as postsAPI from '../lib/api/posts';
// import { takeLatest } from 'redux-saga/effects';

// const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
//   createRequestActionTypes('posts/LIST_POSTS');

// export const listPosts = createAction(LIST_POSTS, ({ page, account, tag }) => ({
//   page,
//   account,
//   tag,
// }));

// const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
// export function* postsSaga() {
//   yield takeLatest(LIST_POSTS, listPostsSaga);
// }

// const initialState = {
//   posts: null,
//   error: null,
//   lastPage: 1,
// };

// const posts = handleActions(
//   {
//     [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
//       ...state,
//       posts,
//       lastPage: parseInt(posts.headers['last-page'], 10), // 문자열을 숫자로 변환
//     }),
//     [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       error,
//     }),
//   },
//   initialState,
// );

// export default posts;
