export const DB = [
  { key: "amazonaws", label: "Amazon Web Services" },
  { key: "accounts.google", label: "Google" },
  { key: "youtube", label: "Youtube" },
  { key: "notion", label: "Notion" },
  { key: "kakaobank", label: "카카오 뱅크" },
  { key: "kosaf", label: "한국장학재단" },
  { key: "navercorp", label: "네이버" },
  { key: "navercafe", label: "네이버 카페" },
  { key: "webtoonscorp", label: "네이버 웹툰" },
  { key: "github", label: "Github" },
  { key: "ut.taxi", label: "UT 택시" },
  { key: "hancomdocs", label: "Hancom Docs" },
  { key: "programmers", label: "프로그래머스" },
];

export function convertToLabel(address: string) {
  for (const item of DB) {
    if (address.includes(item.key)) return item.label;
  }
  return address;
}
