/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCookie } from "cookies-next";

const COOKIE_PATH = "/";
const COOKIE_EXPIRY = new Date(new Date().setMonth(new Date().getMonth() + 1));

const baseOptions: any = {
  path: COOKIE_PATH,
  expires: COOKIE_EXPIRY,
};

export const saveToken = (
  token: string, 
) => {
  setCookie("authToken", token, baseOptions);
};