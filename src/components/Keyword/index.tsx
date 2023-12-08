import { useRecoilState } from "recoil";

import Xicon from "@/assets/Xicon.svg";
import { keyWordArrayState } from "@/recoil/atom/keyword";

import { Container } from "./style";

const Keyword = ({ keyword, state }: { keyword: string; state: boolean }) => {
  const [keywordArray, setKeywordArray] = useRecoilState(keyWordArrayState);

  const DeleteKeyword = (keyword: string) => {
    setKeywordArray([...keywordArray.filter((item) => item !== keyword)]);
  };

  return (
    <Container $state={state}>
      {keyword}
      {state && (
        <img
          src={Xicon}
          alt="X"
          width={10}
          onClick={() => DeleteKeyword(keyword)}
        ></img>
      )}
    </Container>
  );
};

export default Keyword;
