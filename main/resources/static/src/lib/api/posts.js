import qs from 'qs';
import client from './client';

export const writePost = ({ id, title, content, emoji, tags, createdAt }) =>
  client.post('/api/diary/new', {
    id,
    title,
    content,
    emoji,
    tags,
    createdAt,
  });

export const readPost = (id) => client.get(`/api/diary/${id}`);

// 조금만 더 알아보자.
export const listPosts = ({
  page,
  account,
  emoji,
  tags,
  createdAt,
  updatedAt,
}) => {
  const queryString = qs.stringify({
    page,
    account,
    emoji,
    tags,
    createdAt,
    updatedAt,
  });
  return client.get(`/api/diarys?${queryString}`);
};

export const updatePost = ({
  id,
  title,
  body,
  emoji,
  tags,
  createdAt,
  updatedAt,
}) =>
  client.put(`/api/diary/${id}`, {
    title,
    body,
    emoji,
    tags,
    createdAt,
    updatedAt,
  });

export const removePost = (id) => client.delete(`/api/diary/${id}`);

// unloadPost가 왜 있었지?
