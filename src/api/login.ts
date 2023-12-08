import { RICHAM } from ".";

export const postLogin = async ({ id, pw }: { id: string; pw: string }) => {
  const res = await RICHAM.post("/user/signin", {
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
  const res = await RICHAM.post("/user/signup", {
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

export const postValidationEmail = async ({ Id, Pw }: { Id: string; Pw: string }) => {
  const res = await RICHAM.post("/mail/validate", {
    id: Id,
    password: Pw,
  });
  return res;
};
