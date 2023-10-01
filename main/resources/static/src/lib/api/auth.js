import client from './client';

// 로그인
export const login = ({ account, password }) =>
  client.post(`/user/${account}`, { account, password });

// 회원가입
export const register = ({ account, password }) =>
  client.post('/user/new', { account, password });

// 로그인 상태 확인 - 물어보기
export const check = () => client.get('/api/users');

// 로그아웃 - 물어보기
export const logout = () => client.post('/api/users');
