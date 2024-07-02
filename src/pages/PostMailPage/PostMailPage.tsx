import { useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Editor as TinyMCEEditor } from "tinymce";

import { postMailAPI } from "@/api/postmail";
import GoogleLogo from "@/assets/google-circle-logo.svg";
import NaverLogo from "@/assets/naver-circle-logo.svg";
import postIcon from "@/assets/postIcon.svg";
import { Toast } from "@/components/Toast";
import { postEmail } from "@/types";

import * as styles from "./PostMailPage.style";

const mailLogo = [
  { url: GoogleLogo, name: "GOOGLE" },
  { url: NaverLogo, name: "NAVER" },
];

const PostMailPage = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<postEmail>({
    platform: "GOOGLE",
    mail: "",
    header: "",
    body: "",
  });
  const [lazy, setLazy] = useState({
    loading: false,
    toastError: false,
    toastComplete: false,
  });

  const editorRef = useRef<TinyMCEEditor | null>(null);

  const onEditorChange = (content: string) => {
    setPost((post) => ({ ...post, body: content }));
  };

  const postMail = async () => {
    setLazy({ ...lazy, loading: true });
    try {
      await postMailAPI(post);
      setLazy({ ...lazy, loading: false });
      setLazy({ ...lazy, toastComplete: true });

      setTimeout(() => {
        setLazy({ ...lazy, toastComplete: false });
        navigate("/");
      }, 1500);
    } catch (error) {
      setLazy({ ...lazy, loading: false });
      setLazy({ ...lazy, toastError: true });
      setTimeout(() => setLazy({ ...lazy, toastError: false }), 1500);
    }
  };

  const contentPush = () => {
    if (editorRef.current) {
      const cur = editorRef.current.getContent();

      editorRef.current.setContent(
        cur +
          `<p>제목: [단체명] S전자 대리 과정 강의 요청 (1/10 금 09:00~12:00)
<br/>
제목: [A부서] 행사 일정 안내 (1/27 금 18:00-22:00 대한호텔)

</p>`
      );
    }
  };

  return (
    <styles.Container>
      {lazy.toastComplete && <Toast message="메일보내기 완료!" />}
      {lazy.toastError && <Toast message="이메일 형식이 잘못되었습니다!" />}
      {lazy.loading && (
        <styles.LoaderWrapper>
          <ClipLoader
            color="#fff"
            loading={lazy.loading}
            size={150}
          />
        </styles.LoaderWrapper>
      )}
      <styles.Title>메일 보내기</styles.Title>
      <styles.Description>
        보내고 싶은 메일을 선택 후, 원하는 사람에게 메일을 보낼 수 있어요!
      </styles.Description>
      <styles.innerContainer>
        <styles.Header>
          <styles.HeaderLeft>
            <styles.HeaderTitle>
              <span>제목</span>
              <input onChange={(e) => setPost({ ...post, header: e.target.value })} />
            </styles.HeaderTitle>
            <styles.HeaderTitle>
              <span>이메일</span>
              <input onChange={(e) => setPost({ ...post, mail: e.target.value })} />
            </styles.HeaderTitle>
          </styles.HeaderLeft>
          <styles.HeaderRight>
            <styles.togglesButton>
              {mailLogo.map((logo, idx) => (
                <img
                  className={logo.name === post.platform ? "active" : ""}
                  key={idx}
                  src={logo.url}
                  alt={logo.name}
                  onClick={() => setPost({ ...post, platform: logo.name })}
                />
              ))}
            </styles.togglesButton>
            <styles.PostButton onClick={postMail}>
              <img src={postIcon} />
              보내기
            </styles.PostButton>
          </styles.HeaderRight>
        </styles.Header>
        <styles.Editor>
          <Editor
            apiKey="ccfx0pf39d4vhnoet8mtq1tcx6vtm27xluwq60alr1lbw01e"
            value={post.body}
            onEditorChange={onEditorChange}
            onInit={(_, editor) => (editorRef.current = editor)}
            init={{
              language: "ko_KR",
              width: "50%",
              height: "100%",
              menubar: false,
              statusbar: false,
              plugins: "autolink autosave save directionality image link",
              toolbar:
                "blocks fontsizeinput bold italic underline strikethrough forecolor backcolor customRemove ",
              link_context_toolbar: true,
            }}
          />
        </styles.Editor>
      </styles.innerContainer>
      <button onClick={contentPush}>클릭</button>
      <styles.Content>{post.body}</styles.Content>
    </styles.Container>
  );
};

export default PostMailPage;
