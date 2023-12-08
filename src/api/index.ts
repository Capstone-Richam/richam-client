import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

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

export const RICHAM = axios.create({
  baseURL: "https://dev.richam.site/api",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  responseType: "json",
});

export async function getAsync<T>(url: string, config?: AxiosRequestConfig) {
  try {
    const response = await RICHAM.get<T, AxiosResponse<T>>(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(error);
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
    console.error(error);
    throw new Error();
  }
}
