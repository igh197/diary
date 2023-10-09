import qs from 'qs';
import client from './client';

export const writePost = ({
  id,
  category,
  title,
  body,
  emoji,
  tags,
  publishedDate,
}) =>
  client.post('/api/diary/new', {
    id,
    category,
    title,
    body,
    emoji,
    tags,
    publishedDate,
  });

export const readPost = (id) => client.get(`/api/diary/${id}`);

// 조금만 더 알아보자.
export const listPosts = ({ page, account, emoji, tags, publishedDate }) => {
  const queryString = qs.stringify({
    page,
    account,
    emoji,
    tags,
    publishedDate,
  });
  return client.get(`/api/diarys?${queryString}`);
};

export const updatePost = ({
  id,
  category,
  title,
  body,
  emoji,
  tags,
  publishedDate,
}) =>
  client.put(`/api/diary/${id}`, {
    category,
    title,
    body,
    emoji,
    tags,
    publishedDate,
  });

export const removePost = (id) => client.delete(`/api/diary/${id}`);
