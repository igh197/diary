import { atom, selector } from 'recoil';

export const postState = atom({
  key: 'postState',
  default: {
    postInfo: {
      id: 0,
      title: '',
      content: '',
      emoji: '',
      tags: [],
      createdAt: null,
      updatedAt: null,
      deletedAt: null,
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
