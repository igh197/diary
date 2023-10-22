import client from './client';

// 로그인
export const login = ({ account, password }) =>
  client.post(`/user/${account}`, { account, password });

// 회원가입
export const register = ({ account, password }) =>
  client.post('/user/new', { account, password });

// 로그아웃 - 수정
export const logout = () => client.post('/api/logout');

export const changePassword = ({ account, password }) =>
  client.post(`/user/${account}`, { account, password });
