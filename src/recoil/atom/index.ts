import { atom } from "recoil";

export const ModalState = atom({
  key: "ModalState",
  default: "",
});

export const googleBtnState = atom({
  key: "googleBtnState",
  default: false,
});

export const naverBtnState = atom({
  key: "naverBtnState",
  default: false,
});

export const ToastState = atom({
  key: "ToastState",
  default: false,
});

export const LoadingState = atom({
  key: "LoadingState",
  default: true,
});
