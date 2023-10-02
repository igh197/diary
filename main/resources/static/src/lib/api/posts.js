import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags, emotions }) =>
  client.post('/api/diary/new', { title, body, tags, emotions });

export const readPost = (id) => client.get(`/api/diary/${id}`);

export const listPosts = ({ page, account, tag, emotion }) => {
  // 조금만 더 알아보자
  const queryString = qs.stringify({
    page,
    account,
    tag,
    emotion,
  });
  return client.get(`/api/diarys?${queryString}`);
};

export const updatePost = ({ id, title, body, tags, emotions }) =>
  client.put(`/api/diary/${id}`, {
    title,
    body,
    tags,
    emotions,
  });

export const removePost = (id) => client.delete(`/api/diary/${id}`);
