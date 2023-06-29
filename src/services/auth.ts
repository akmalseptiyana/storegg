import { LoginTypes } from "./types";
import { callAPI } from "@/config/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${BASE_URL}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function setLogin(data: LoginTypes) {
  const url = `${BASE_URL}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
