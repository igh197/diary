import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: {
    account: '',
    password: '',
  },
});

export const registerState = atom({
  key: 'registerState',
  default: {
    account: '',
    password: '',
    passwordConfirm: '',
  },
});

export const authCheckState = atom({
  key: 'authCheckState',
  default: {
    auth: null,
  },
});

export const passwordState = atom({
  key: 'passwordState',
  default: {
    password: '',
    passwordConfirm: '',
  },
});
