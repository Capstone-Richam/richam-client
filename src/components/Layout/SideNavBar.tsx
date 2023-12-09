import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import AllIcon from "@/assets/filter-all.svg";
import GoogleIcon from "@/assets/filter-google.svg";
import KeywordIcon from "@/assets/filter-keyword.svg";
import NaverIcon from "@/assets/filter-naver.svg";
import logo from "@/assets/richamLogo.svg";
import { MailFilterAtom } from "@/recoil/atom/mail";
import { MailFilterType } from "@/types";

import * as styles from "./Layout.style";

const INFO: Record<MailFilterType, { label: string; icon: string }> = {
  ALL: { label: "전체", icon: AllIcon },
  NAVER: { label: "네이버", icon: NaverIcon },
  GOOGLE: { label: "구글", icon: GoogleIcon },
  KEYWORD: { label: "키워드", icon: KeywordIcon },
};

const SideNavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentFilter, setCurrentFilter] = useRecoilState(MailFilterAtom);

  useEffect(() => {
    if (pathname === "/keyword/mails") setCurrentFilter("KEYWORD");
  }, [pathname, setCurrentFilter]);

  const onClickFilterButton = (filter: MailFilterType) => {
    setCurrentFilter(filter);
    if (filter === "KEYWORD" && pathname !== "/keyword/mails") navigate("/keyword/mails");
    if (filter !== "KEYWORD" && pathname !== "/") navigate("/");
  };

  return (
    <styles.BarWrapper>
      <img
        src={logo}
        height={30}
      />
      <styles.ButtonWrapper>
        {(Object.keys(INFO) as MailFilterType[]).map((filter) => (
          <>
            {filter === "KEYWORD" && <styles.hr />}
            <styles.NavButton
              key={filter}
              active={currentFilter === filter && pathname !== "/keyword/new"}
              onClick={() => onClickFilterButton(filter)}
            >
              <img src={INFO[filter].icon} />
              <span>{INFO[filter].label} 메일</span>
            </styles.NavButton>
          </>
        ))}
      </styles.ButtonWrapper>
      <styles.KeywordBtn onClick={() => navigate("/keyword/new")}>
        관심 키워드 추가
      </styles.KeywordBtn>
    </styles.BarWrapper>
  );
};

export default SideNavBar;
