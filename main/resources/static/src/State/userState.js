import { atom, selector } from 'recoil';
import { getTheme, getUserImage } from '../lib/api/user';

export const userState = atom({
  key: 'userState',
  default: {
    account: 'account',
    userImage: '',
    userTheme: 'pinkTheme',
  },
});

export const userAccountState = selector({
  key: 'userAccountState',
  get: ({ get }) => {
    const localStorageAccount = localStorage.getItem('account');
    return localStorageAccount ? JSON.parse(localStorageAccount) : 'account';
    // 나중에는 api로 끌고 오기 callback!!
  },
  set: ({ set }, newValue) => {
    localStorage.setItem('account', JSON.stringify(newValue));
    set(userState, (oldValue) => ({
      ...oldValue,
      account: newValue,
    }));
  },
});

export const themeState = selector({
  key: 'themeState',
  get: async ({ get }) => {
    const localStorageTheme = localStorage.getItem('theme');
    return localStorageTheme ? JSON.parse(localStorageTheme) : 'pinkTheme';
    // recoil callback 함수 활용해서 사용하자. (맨처음에만 실행되는 함수)
    // try {
    //   const response = await getTheme(userState.account);
    //   localStorage.setItem('theme', JSON.stringify(response));
    //   return response;
    // } catch (e) {
    //   const localStorageTheme = localStorage.getItem('theme');
    //   return localStorageTheme ? JSON.parse(localStorageTheme) : 'pinkTheme';
    // }
  },
  set: ({ set }, newValue) => {
    localStorage.setItem('theme', JSON.stringify(newValue));
    set(userState, (oldValue) => ({
      ...oldValue,
      userTheme: newValue,
    }));
  },
});

export const userImageState = selector({
  key: 'userImageState',
  get: async ({ get }) => {
    try {
      const response = await getUserImage(userState.account);
      return response;
    } catch (e) {
      return '';
    }
  },
  set: ({ set }, newValue) => {
    localStorage.setItem('user-image', JSON.stringify(newValue));
    set(userState, (oldValue) => ({
      ...oldValue,
      userImage: newValue,
    }));
  },
});
