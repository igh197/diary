import client from './client';

// 테마, 사용자 이름, 이미지를 받아온다.

// 로그인 확인 후에
export const getUser = async (account) => {
  // const userImage = await client.get(`api/userimage/${account}.json`);
  const userTheme = await client.get(`api/user/${account}.json`);

  return { userTheme };
};

// 프로필 사진 전송
export const postUserImage = async (account, storedFilePath) => {
  const userImage = await client.post(`api/userimage/${account}.json`, {
    storedFilePath,
  });
  return userImage;
};

// 테마 전송 (로그아웃 시)
export const postUser = async (account, theme) => {
  const userTheme = await client.post(`api/user/${account}.json`, { theme });
  return userTheme;
};
