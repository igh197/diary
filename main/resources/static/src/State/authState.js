import { atom, selector } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    register: {
      account: '',
      password: '',
      passwordConfirm: '',
    },
    login: {
      account: '',
      password: '',
    },
  },
});

export const loginState = selector({
  key: 'loginState',
  get: ({ get }) => {
    const auth = get(authState);
    return {
      form: auth.login,
    };
  },
  set: ({ set }, newValue) => {
    set(authState, (oldValue) => ({
      ...oldValue,
      login: newValue,
    }));
  },
});

export const registerState = selector({
  key: 'registerState',
  get: ({ get }) => {
    const auth = get(authState);
    return {
      form: auth.register,
    };
  },
  set: ({ set }, newValue) => {
    set(authState, (oldValue) => ({
      ...oldValue,
      register: newValue,
    }));
  },
});

export const passwordState = selector({
  key: 'passwordState',
  get: ({ get }) => {
    const auth = get(authState);
    return {
      form: {
        password: auth.register.password,
        passwordConfirm: auth.register.passwordConfirm,
      },
      auth: auth.auth,
      authError: auth.authError,
    };
  },
  set: ({ set }, newValue) => {
    set(authState, (oldValue) => ({
      ...oldValue,
      register: newValue,
    }));
  },
});
