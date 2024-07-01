import Layout from "@/components/Layout";
import KeywordFilteredMailPage from "@/pages/KeywordFilteredMailPage";
import KeywordRegisterPage from "@/pages/KeywordRegisterPage";
import LoginPage from "@/pages/LoginPage";
import MailDetailPage from "@/pages/MailDetailPage";
import MainPage from "@/pages/MainPage/MainPage";
import PostMailPage from "@/pages/PostMailPage";
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
        element: <MailDetailPage />,
      },
      {
        path: "keyword/mails",
        element: <KeywordFilteredMailPage />,
      },
      {
        path: "keyword/new",
        element: <KeywordRegisterPage />,
      },
      {
        path: "/postmail",
        element: <PostMailPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
];

export default routes;
