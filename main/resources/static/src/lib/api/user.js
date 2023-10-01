import client from './client';

// 테마, 사용자 이름, 이미지를 받아온다.
export const getTheme = async (account) => {
  const response = await client.get(`api/user/${account}.json`);
  return response.theme;
};

export const postTheme = async (account, theme) => {
  const response = await client.post(`api/user/${account}.json`, { theme });
  return response;
};

// 이미지 조회는 없나요?
export const getUserImage = async (account) => {
  const response = await client.get(`api/image/${account}.json`);
  return response.image;
};

export const postUserImage = async (account, imagePath) => {
  const response = await client.post(`api/image/${account}.json`, {
    imagePath,
  });
  return response;
};
