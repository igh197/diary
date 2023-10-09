import { atom, selector } from 'recoil';
import { getUser } from '../lib/api/user';

export const userState = atom({
  key: 'userState',
  default: {
    account: 'account',
    userImage: '/images/User/Profile.png',
    userTheme: 'pinkTheme',
  },
});

// 이거 지금은 안 쓴다. 확인!
export const userProfileState = selector({
  key: 'userProfileState',
  get: ({ get }) => {
    const localStorageAccount = localStorage.getItem('account');
    const localStorageImage = localStorage.getItem('user-image');
    return {
      account: localStorageAccount
        ? JSON.parse(localStorageAccount)
        : 'account',
      userImage: localStorageImage ? JSON.parse(localStorageImage) : '',
    };
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
      const response = await getUser(userState.account);
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
