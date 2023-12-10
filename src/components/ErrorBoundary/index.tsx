import { PropsWithChildren } from "react";

import { ErrorBoundary as ErrBoundary, FallbackProps } from "react-error-boundary";

import * as styles from "./ErrorBoundary.style";

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  return (
    <styles.ErrorContainer>
      저희 서비스에 문제가 발생했어요..😔 다시 한번 시도해주세요!
      <styles.RefreshButton onClick={resetErrorBoundary}>새로고침</styles.RefreshButton>
    </styles.ErrorContainer>
  );
};

const ErrorBoundary = ({ children }: PropsWithChildren) => (
  <ErrBoundary fallbackRender={FallbackComponent}>{children}</ErrBoundary>
);

export default ErrorBoundary;
