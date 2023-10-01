import { atom, selector } from 'recoil';

export const postState = atom({
  key: 'postState',
  default: {
    title: '',
    body: '',
    tags: [],
    post: null,
    postError: null,
    originalPostId: null,
  },
});

export const postListState = atom({
  key: 'postListState',
  default: [],
});

export const writeState = selector({
  key: 'writeState',
  get: ({ get }) => {
    const write = get(postState);
    return {
      title: write.title,
      body: write.body,
    };
  },
  // set 좀 더 가볍게 변경
  set: ({ set, get }, newValue) => {
    const write = get(postState);
    set(postState, { ...write, ...newValue });
  },
});

export const writeTagState = selector({
  key: 'writeTagState',
  get: ({ get }) => {
    const write = get(postState);
    return write.tags;
  },
  // set 좀 더 가볍게 변경
  set: ({ set, get }, newValue) => {
    const write = get(postState);
    set(postState, { ...write, ...newValue });
  },
});
