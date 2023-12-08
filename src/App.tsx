import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./router";
import { GlobalStyle } from "./style/global";

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
