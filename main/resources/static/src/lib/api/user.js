import client from './client';

// 테마, 사용자 이름, 이미지를 받아온다.

// 로그인 확인 후에
export const getUser = async (account) => {
  const userImage = await client.get(`api/image/${account}.json`);
  const userTheme = await client.get(`api/user/${account}.json`);
  return { userImage, userTheme };
};

// 로그아웃 하기 전에
export const postUser = async (account, imagePath, theme) => {
  const userImage = await client.post(`api/image/${account}.json`, {
    imagePath,
  });
  const userTheme = await client.post(`api/user/${account}.json`, { theme });
  return { userImage, userTheme };
};
