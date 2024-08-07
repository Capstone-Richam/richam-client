import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const RICHAM = axios.create({
  baseURL: "https://kusitms28.shop/api",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
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

RICHAM.interceptors.request.use(async (req: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken");

  if (req.headers && accessToken) req.headers.Authorization = `Bearer ${accessToken}`;
  return req;
});

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
