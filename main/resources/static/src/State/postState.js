import { atom, selector } from 'recoil';

export const postListState = atom({
  key: 'postListState',
  default: {
    totalPages: 0,
    totalElements: 0,
    currentPage: 0,
    currentElements: 0,
    postInfo: null,
  },
});

export const postState = atom({
  key: 'postState',
  default: {
    id: 0,
    title: '',
    body: '',
    emoji: 'Happy',
    summed: '',
    createdAt: null,
  },
});

export const postErrorState = atom({
  key: 'postErrorState',
  default: {
    error: null,
  },
});
