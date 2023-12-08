import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export * from "./mail.ts";

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  errorLine?: boolean;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // 다른 버튼 관련 프로퍼티 추가
}

export interface KeyWordProps {
  keyword: string;
  state: boolean;
  onClick?: () => void;
}
