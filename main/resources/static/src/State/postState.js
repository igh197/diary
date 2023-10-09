import { atom, selector } from 'recoil';
import { userState } from './userState';

export const postState = atom({
  key: 'postState',
  default: {
    postContent: {
      id: 0,
      title: '',
      body: '',
      emoji: '',
      tags: [],
      publishedDate: null,
    },
    post: null,
    postError: null,
  },
});

export const postListState = selector({
  key: 'postListState',
  get: ({ get }) => {
    const userName = get(userState);
    const post = get(postState);
    return {
      userName: userName.account,
      postContent: post.postContent,
      post: post.post,
      postError: post.postError,
    };
  },
});

export const writeState = selector({
  key: 'writeState',
  get: ({ get }) => {
    const post = get(postState);
    return post.postContent;
  },
  set: ({ set, get }, newValue) => {
    const post = get(postState);
    set(postState, { ...post, post: newValue });
  },
});
