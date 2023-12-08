import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import logo from "@/assets/richamLogo.svg";
import { MailFilterAtom } from "@/recoil/atom/mail";
import { MailFilterType } from "@/types";

import * as styles from "./Layout.style";

const FILTERS_INFO: Record<MailFilterType, string> = {
  all: "전체",
  naver: "네이버",
  google: "구글",
  keyword: "키워드",
};

// TODO icon들 좀 넣어주세요..
const SideNavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentFilter, setCurrentFilter] = useRecoilState(MailFilterAtom);

  const onClickFilterButton = (filter: MailFilterType) => {
    setCurrentFilter(filter);
    if (filter === "keyword" && pathname === "/") navigate("/keyword/mails");
    if (filter !== "keyword" && pathname !== "/") navigate("/");
  };

  return (
    <styles.BarWrapper>
      <img
        src={logo}
        height={30}
      />
      <styles.ButtonWrapper>
        {(Object.keys(FILTERS_INFO) as MailFilterType[]).map((filter) => (
          <>
            {filter === "keyword" && <styles.hr />}
            <styles.NavButton
              key={filter}
              active={currentFilter === filter}
              onClick={() => onClickFilterButton(filter)}
            >
              {FILTERS_INFO[filter]} 메일
            </styles.NavButton>
          </>
        ))}
      </styles.ButtonWrapper>
    </styles.BarWrapper>
  );
};

export default SideNavBar;
