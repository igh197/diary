import { atom, selector } from 'recoil';

export const postListState = atom({
  key: 'postListState',
  default: {
    totalPages: null,
    totalElements: null,
    currentPage: null,
    currentElements: null,
    postInfo: null,
  },
});

export const postState = atom({
  key: 'postState',
  default: {
    postInfo: {
      id: 0,
      title: '',
      body: '',
      emoji: '',
      tags: [],
      createdAt: null,
    },
    post: null,
    postError: null,
  },
});

export const writeState = selector({
  key: 'writeState',
  get: ({ get }) => {
    const post = get(postState);
    return post.postInfo;
  },
  set: ({ set, get }, newValue) => {
    const post = get(postState);
    set(postState, { ...post, post: newValue });
  },
});

export const readState = selector({
  key: 'readState',
  get: ({ get }) => {
    const post = get(postState);
    return post.postInfo;
  },
});
