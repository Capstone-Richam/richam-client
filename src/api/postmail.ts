import { postEmail, promptResponse } from "@/types";

import { ApiResponse, getAsync, postAsync } from ".";

export const postMailAPI = async (postmail: postEmail) => {
  const res = await postAsync<unknown, postEmail>("/mail/send", postmail);
  return res;
};

export const promptAI = async (prompt: string) => {
  const { data } = await postAsync<ApiResponse<promptResponse>, { prompt: string }>("/windyflo", {
    prompt: prompt,
  });
  return data;
};

export const getMail = async () => {
  const { data } = await getAsync<ApiResponse<{ GOOGLE: string; NAVER: string }>>("/member/mailId");
  return data;
};
