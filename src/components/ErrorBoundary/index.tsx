import { PropsWithChildren } from "react";

import { ErrorBoundary as ErrBoundary, FallbackProps } from "react-error-boundary";

const FallbackComponent = ({ error }: FallbackProps) => {
  console.log(error);
  return (
    <div>
      서비스에 문제가 발생했어요. 다시 시도해주세요!
      {/*<button onClick={resetErrorBoundary}>새로고침</button>*/}
    </div>
  );
};

const ErrorBoundary = ({ children }: PropsWithChildren) => (
  <ErrBoundary fallbackRender={FallbackComponent}>{children}</ErrBoundary>
);

export default ErrorBoundary;
