import { RICHAM } from ".";

export const postLogin = async ({ id, pw }: { id: string; pw: string }) => {
  const res = await RICHAM.post("/member/signin", {
    account: id,
    password: pw,
  });
  return res;
};

export const postRegister = async ({
  userId,
  password2,
  name,
  naverId,
  naverPw,
  googleId,
  googlePw,
}: {
  userId: string;
  password2: string;
  name: string;
  naverId: string;
  naverPw: string;
  googleId: string;
  googlePw: string;
}) => {
  const res = await RICHAM.post("/member/signup", {
    account: userId,
    password: password2,
    name: name,
    naverId: naverId,
    naverPassword: naverPw,
    gmailId: googleId,
    gmailPassword: googlePw,
  });
  return res;
};

export const postValidationEmail = async ({
  Id,
  Pw,
  email,
}: {
  Id: string;
  Pw: string;
  email: string;
}) => {
  const res = await RICHAM.post("/mail/validate", {
    type: `imap.${email}.com`,
    id: Id,
    password: Pw,
  });
  return res;
};

export const getDuplicate = async ({ aorn, content }: { aorn: string; content: string }) => {
  const res = await RICHAM.post("/member/validate", {
    aorn: aorn,
    content: content,
  });
  return res;
};

export const getKakao = async (code: string) => {
  const res = await RICHAM.get(`/kakao/send?code=${code}`);
  return res;
};
