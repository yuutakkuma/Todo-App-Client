let accessToken: string;
// レスポンスから受け取ったアクセストークンをセットする
export const setAccessToken = (s: string) => {
  accessToken = s;
};
// アクセストークンをゲットする
export const getAccessToken = () => {
  return accessToken;
};
