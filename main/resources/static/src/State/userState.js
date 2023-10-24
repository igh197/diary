import { atom, selector, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const userState = atom({
  key: 'userState',
  default: {
    account: 'account',
    userImage: '/images/User/Profile.svg',
    userTheme: 'basicTheme',
  },
});

export const getUserState = selector({
  key: 'getUserState',
  get: async ({ get }) => {
    const account = localStorage.getItem('account');
    const userImage = localStorage.getItem('user-image');
    const userTheme = localStorage.getItem('theme');
    console.log(account, userImage, userTheme);

    return { account, userTheme, userImage };
  },
});

export const userAccount = selector({
  key: 'userAccount',
  get: ({ get }) => {
    const user = get(userState);
    return user.account;
  },
});

// 프로필 사진 수정
export const userProfileState = selector({
  key: 'userProfileState',
  get: ({ get }) => {
    const user = get(userState);
    return {
      account: user.account,
      userImage: user.userImage,
    };
  },
  set: ({ set }, newValue) => {
    set(userState, (oldValue) => ({
      ...oldValue,
      userImage: newValue,
    }));
  },
});

// 테마 수정
export const themeState = selector({
  key: 'themeState',
  get: async ({ get }) => {
    const user = get(userState);
    return user.userTheme;
  },
  set: ({ set }, newValue) => {
    localStorage.setItem('theme', JSON.stringify(newValue));
    set(userState, (oldValue) => ({
      ...oldValue,
      userTheme: newValue,
    }));
  },
});
