import { KeyboardEvent, useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Editor as TinyMCEEditor } from "tinymce";

import { postMailAPI, promptAI } from "@/api/postmail";
import GoogleLogo from "@/assets/google-circle-logo.svg";
import NaverLogo from "@/assets/naver-circle-logo.svg";
import postIcon from "@/assets/postIcon.svg";
import promptIcon from "@/assets/promptIcon.svg";
import { Toast } from "@/components/Toast";
import { postEmail, promptResponse } from "@/types";

import * as styles from "./PostMailPage.style";

const mailLogo = [
  { url: GoogleLogo, name: "GOOGLE" },
  { url: NaverLogo, name: "NAVER" },
];

const PostMailPage = () => {
  const navigate = useNavigate();
  const [sendMail, setSendmail] = useState<string>(localStorage.getItem("GOOGLE") || "GOOGLE");
  const [post, setPost] = useState<postEmail>({
    platform: "GOOGLE",
    mail: "",
    header: "",
    body: "",
  });
  const [promptContent, setPromptContent] = useState<string>("");
  const [responseContent, setResponseContent] = useState<promptResponse>({
    body: "",
    header: "",
    template: "",
  });

  const [lazy, setLazy] = useState({
    loading: false,
    promptLoading: false,
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

  const postPrompt = async () => {
    setResponseContent({
      body: "",
      header: "",
      template: "",
    });
    setLazy({ ...lazy, promptLoading: true });
    const data = await promptAI(promptContent);
    setResponseContent(data);
    setLazy({ ...lazy, promptLoading: false });
  };

  const headerPush = () => {
    setPost((post) => ({ ...post, header: responseContent.header }));
  };

  const contentPush = () => {
    if (editorRef.current) {
      const cur = editorRef.current.getContent();

      editorRef.current.setContent(cur + responseContent.body);
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
              <span>수신 메일</span>
              <input onChange={(e) => setPost({ ...post, mail: e.target.value })} />
            </styles.HeaderTitle>
            <styles.HeaderTitle>
              <span>송신 메일</span>
              <input
                className="send_input"
                value={sendMail}
              />
            </styles.HeaderTitle>
            <styles.HeaderTitle>
              <span>제목</span>
              <input
                value={post.header}
                onChange={(e) => setPost({ ...post, header: e.target.value })}
              />
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
                  onClick={() => {
                    setPost({ ...post, platform: logo.name });
                    setSendmail(localStorage.getItem(logo.name) || logo.name);
                  }}
                />
              ))}
              <span className="send">송신할 메일</span>
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
          <styles.AIPrompt>
            <div className="text">
              <div className="AI_header">메일 형식이 궁금할 땐?</div>
              <div className="AI_description">
                ai 기술을 활용해 만든 메일 형식 제공 프롬프트입니다.
                <br />
                원하는 형식을 입력 후, 사용해보세요!!
              </div>
            </div>
            <div className="prompt_input">
              <input
                type="text"
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    if (!e.shiftKey) {
                      e.preventDefault();
                      postPrompt();
                    }
                  }
                }}
                onChange={(e) => setPromptContent(e.target.value)}
                value={promptContent}
              />
              <div className="prompt_button">
                <img
                  src={promptIcon}
                  onClick={postPrompt}
                />
              </div>
            </div>
            {lazy.promptLoading && (
              <div className="prompt_loading">
                <ClipLoader
                  color="#fff"
                  loading={lazy.promptLoading}
                  size={150}
                />
                시간이 걸릴 수 있습니다!
              </div>
            )}
            {responseContent.header && (
              <>
                <div className="response_content">
                  <span>제목</span>
                  <div className="header">{responseContent.header}</div>
                  <span>내용</span>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: responseContent.body }}
                  ></div>
                </div>

                <div className="button_wrapper">
                  <button onClick={headerPush}>제목 추가하기</button>
                  <button onClick={contentPush}>내용 추가하기</button>
                </div>
              </>
            )}
          </styles.AIPrompt>
        </styles.Editor>
      </styles.innerContainer>
    </styles.Container>
  );
};

export default PostMailPage;
