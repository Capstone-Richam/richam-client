import { InputProps } from "@/types";

import { BasicInput } from "./style";

interface CustomInputProps extends InputProps {
  className?: string;
}

export const Input = ({
  value,
  type,
  placeholder,
  onChange,
  onFocus,
  errorLine,
  onKeyDown,
  name,
  className,
}: CustomInputProps) => {
  return (
    <BasicInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      errorLine={errorLine}
      onKeyDown={onKeyDown}
      name={name}
      className={className}
    />
  );
};

export default Input;
