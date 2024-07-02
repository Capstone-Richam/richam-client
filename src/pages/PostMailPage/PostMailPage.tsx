import { SetStateAction, useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

import * as styles from "./PostMailPage.style";

const PostMailPage = () => {
  const [content, setContent] = useState<string>("");
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const onEditorChange = (content: SetStateAction<string>) => {
    setContent(content);
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
      <styles.Editor>
        <styles.Header>
          <styles.Title>
            <span>제목</span>
            <input />
          </styles.Title>
          <styles.Title>
            <span>이메일</span>
            <input />
          </styles.Title>
        </styles.Header>
        <Editor
          apiKey={import.meta.env.VITE_editor_api_key}
          value={content}
          onEditorChange={onEditorChange}
          onInit={(_, editor) => (editorRef.current = editor)}
          init={{
            language: "ko_KR",
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
      <button onClick={contentPush}>클릭</button>
      <styles.Content>{content}</styles.Content>
    </styles.Container>
  );
};

export default PostMailPage;
