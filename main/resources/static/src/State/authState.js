import { atom, selector } from 'recoil';

// 굳이 따로 만들어야 하나?
// 그냥 passwordConfirm은 확인할 때에만 필요하니까 상태관리보다는 그저 변수로만 쓰는게 나을 거 같다
// 그리고 passwordConfirm은 그냥 프론트 내에서 확인하는 용도로만 사용하자.

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
    auth: null,
    authError: null,
  },
});

export const loginState = selector({
  key: 'loginState',
  get: ({ get }) => {
    const auth = get(authState);
    return {
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
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
