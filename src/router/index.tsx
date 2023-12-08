import Layout from "@/components/Layout";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage/MainPage";
import RegisterPage from "@/pages/RegisterPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ":mailid",
        element: <>mail detail page</>,
      },
      {
        path: "keyword/mails",
        element: <>keyword mails</>,
      },
      {
        path: "keyword/new",
        element: <>keyword new</>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/regsiter", element: <RegisterPage /> },
];

export default routes;
