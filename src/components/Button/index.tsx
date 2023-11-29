import { ButtonProps } from "@/types";

import { LoginBtn } from "./style";

export const LoginButton = ({ children, onClick }: ButtonProps) => {
  return <LoginBtn onClick={onClick}>{children}</LoginBtn>;
};
