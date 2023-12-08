import { useRecoilState } from "recoil";

import { deleteKeyword } from "@/api/keyword";
import Xicon from "@/assets/Xicon.svg";
import { keyWordArrayState } from "@/recoil/atom/keyword";
import { KeyWordProps } from "@/types";

import { Container } from "./style";

const Keyword = ({ keyword, state, onClick }: KeyWordProps) => {
  const [keywordArray, setKeywordArray] = useRecoilState(keyWordArrayState);

  const DeleteKeyword = (keyword: string) => {
    deleteKeyword(keyword)
      .then(() => {
        setKeywordArray([...keywordArray.filter((item) => item !== keyword)]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container
      $state={state}
      onClick={onClick}
    >
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
