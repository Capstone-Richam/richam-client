import { postEmail } from "@/types";

import { postAsync } from ".";

export const postMailAPI = async (postmail: postEmail) => {
  const res = await postAsync<unknown, postEmail>("/mail/send", postmail);
  return res;
};
