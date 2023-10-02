import { atom, selector } from 'recoil';

export const postState = atom({
  key: 'postState',
  default: {
    post: {
      _id: '', // 얘랑 뭐가 다른 건데?
      title: '',
      body: '',
      tags: [],
      emotions: '',
      originalPostId: null, // 이 친구는 왜 있는 걸까?
      publishedDate: null,
    },
    error: null,
  },
});

export const postListState = atom({
  key: 'postListState',
  default: [],
});

export const writeState = selector({
  key: 'writeState',
  get: ({ get }) => {
    const post = get(postState);
    return post.post;
  },
  set: ({ set, get }, newValue) => {
    const post = get(postState);
    set(postState, { ...post, post: newValue });
  },
});

export const writeTagState = selector({
  key: 'writeTagState',
  get: ({ get }) => {
    const write = get(writeState);
    return write.tags;
  },
  // set 좀 더 가볍게 변경
  set: ({ set, get }, newValue) => {
    const write = get(writeState);
    set(writeState, { ...write, ...newValue });
  },
});
