import { InputProps } from "@/types";

import { BasicInput } from "./style";

export const Input = ({
  value,
  type,
  placeholder,
  onChange,
  onFocus,
  errorLine,
  onKeyDown,
  name,
}: InputProps) => {
  return (
    <div>
      <BasicInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        errorLine={errorLine}
        onKeyDown={onKeyDown}
        name={name}
      />
    </div>
  );
};

export default Input;
