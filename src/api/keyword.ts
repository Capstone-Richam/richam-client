import axios from "axios";

const richamAxios = axios.create({
  baseURL: "https://dev.richam.site/",
});

export const getKeywords = async () => {
  const res = await richamAxios.get("/api/keyword", {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  return res;
};

export const patchKeyword = async (keyword: string) => {
  const res = await richamAxios.patch(
    "/api/keyword",
    { words: [keyword] },
    {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
  return res;
};

export const deleteKeyword = async (keyword: string) => {
  const res = await richamAxios.post(
    "/api/keyword",
    { words: [keyword] },
    {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
  return res;
};
