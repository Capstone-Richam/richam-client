import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const RICHAM = axios.create({
  baseURL: "https://dev.richam.site/api",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${localStorage.accessToken}`,
  },
  responseType: "json",
});

export interface ApiResponse<T> {
  status: number;
  message: string;
  // 서버에서 주는 응답 데이터에 대한 타입 T
  data: T;
}

export interface ApiError {
  isSuccess: boolean; // false?
  code: number;
  message: string;
  result: string;
}

//export function handleError(error: unknown) {
//  // eslint-disable-next-line @typescript-eslint/no-explicit-any
//  if (axios.isAxiosError<ApiError, undefined>(error)) {
//    if (error.response) {
//      return error.response.data;
//    }
//    if (error.request) {
//      return {
//        code: -1,
//        errorMessage: "서버와의 통신 과정에서 문제가 발생했습니다.",
//        data: null,
//      };
//    }
//  }
//  return {
//    code: -1,
//    errorMessage: "서비스에 문제가 발생했어요. 다시 시도해주세요!",
//    data: null,
//  };
//}

export async function getAsync<T>(url: string, config?: AxiosRequestConfig) {
  try {
    const response = await RICHAM.get<T, AxiosResponse<T>>(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
}

export async function postAsync<T, D>(url: string, data: D, config?: AxiosRequestConfig) {
  try {
    const response = await RICHAM.post<T, AxiosResponse<T, D>>(url, data, {
      ...config,
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
}
