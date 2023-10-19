import { atom, selector } from 'recoil';
import { getUser } from '../lib/api/user';

// RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const userState = atom({
  key: 'userState',
  default: {
    account: 'account',
    userImage: '/images/User/Profile.svg',
    userTheme: 'basicTheme',
  },
});

export const userAccount = selector({
  key: 'userAccount',
  get: ({ get }) => {
    const user = get(userState);
    return user.account;
  },
});

export const userProfileState = selector({
  key: 'userProfileState',
  get: ({ get }) => {
    const user = get(userState);
    localStorage.setItem('account', user.account);
    localStorage.setItem('user-image', user.userImage);
    return {
      account: user.account,
      userImage: user.userImage,
    };
    // 나중에는 api로 끌고 오기 callback!!
  },
  set: ({ set }, newValue) => {
    set(userState, (oldValue) => ({
      ...oldValue,
      userImage: newValue,
    }));
  },
});

export const themeState = selector({
  key: 'themeState',
  get: async ({ get }) => {
    const localStorageTheme = localStorage.getItem('theme');
    // 처음 실행했을 때 버그 잡기 setItem!! 수정
    if (['basicTheme', 'greenTheme', 'darkTheme'].includes(localStorageTheme)) {
      localStorage.setItem('theme', JSON.stringify('basicTheme'));
    }
    return localStorageTheme ? JSON.parse(localStorageTheme) : 'basicTheme';
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

// 아직 사용하지 않음 수정
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
