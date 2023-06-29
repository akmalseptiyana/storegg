import { callAPI } from "@/config/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_VERSION = "api/v1";

export async function getMemberOverview() {
  const url = `${BASE_URL}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransactions(valueParams: string) {
  let params = "";
  if (valueParams === "") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }

  const url = `${BASE_URL}/${API_VERSION}/players/history${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail(
  id: string | string[] | undefined,
  token: string
) {
  const url = `${BASE_URL}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function updateProfile(data: FormData) {
  const url = `${BASE_URL}/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: "PUT",
    data,
    token: true,
  });
}
