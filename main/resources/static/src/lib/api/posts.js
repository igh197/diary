import qs from 'qs';
import client from './client';

export const writePost = ({ id, title, body, emoji, tags, createdAt }) =>
  client.post('/api/diary/new', {
    id,
    title,
    body,
    emoji,
    tags,
    createdAt,
  });

export const readPost = (id) => client.get(`/api/diary/${id}`);

// 글리스트 불러오는 API
export const listPosts = ({ account }) => {
  client.get(`/api/diarys?${account}`);
};

// 조금만 더 알아보자.
// export const listPosts = ({ account, emoji, tags, createdAt, updatedAt }) => {
//   const queryString = qs.stringify({
//     account,
//     emoji,
//     tags,
//     createdAt,
//     updatedAt,
//   });
//   return client.get(`/api/diarys?${queryString}`);
// };

export const updatePost = ({ id, title, body, emoji, tags, createdAt }) =>
  client.put(`/api/diary/${id}`, {
    title,
    body,
    emoji,
    tags,
    createdAt,
  });

export const removePost = (id) => client.delete(`/api/diary/${id}`);

// unloadPost가 왜 있었지?
