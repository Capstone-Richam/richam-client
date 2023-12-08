import { RICHAM } from ".";

export const getKeywords = async () => {
  const res = await RICHAM.get("/api/keyword");
  return res;
};

export const patchKeyword = async (keyword: string) => {
  const res = await RICHAM.patch("/api/keyword", { words: [keyword] });
  return res;
};

export const deleteKeyword = async (keyword: string) => {
  const res = await RICHAM.post("/api/keyword", { words: [keyword] });
  return res;
};
