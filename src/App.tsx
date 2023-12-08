import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import routes from "./router";
import { GlobalStyle } from "./style/global";

const App = () => {
  const router = createBrowserRouter(routes);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            throwOnError: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
