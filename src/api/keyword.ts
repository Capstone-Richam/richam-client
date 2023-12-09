import { RICHAM } from ".";

export const getKeywords = async () => {
  const res = await RICHAM.get("/keyword");
  return res;
};

export const patchKeyword = async (keyword: string) => {
  const res = await RICHAM.patch("/keyword", { words: [keyword] });
  return res;
};

export const deleteKeyword = async (keyword: string) => {
  const res = await RICHAM.post("/keyword", { words: [keyword] });
  return res;
};
