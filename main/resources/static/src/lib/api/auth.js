import client from './client';

// 로그인
export const login = async ({ account, password }) => {
  await client
    .post(`/user/${account}`, { account, password })
    .then((response) => {
      console.log('200', response.data);

      if (response.data.auth === null) {
        return false;
      }

      if (response.status === 200) {
        console.log('로그인 성공');
      }
    })
    .catch((error) => console.log(error.response));
};

// 회원가입
export const register = async ({ account, password }) => {
  await client
    .post('/user/new', { account, password })
    .then((response) => {
      console.log('200', response.data);

      if (response.status === 200) {
        console.log('회원가입 성공');
      }
    })
    .catch((error) => console.log(error.response));
};

// 로그아웃
export const logout = () => client.post('/logout');

export const changePassword = ({ account, password }) =>
  client.post(`/user/${account}`, { account, password });
