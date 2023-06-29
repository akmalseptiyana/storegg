import axios from "axios";

import { callAPI } from "@/config/api";
import { CheckoutTypes } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_VERSION = "api/v1";

export async function getFeaturedGame() {
  const ENDPOINT = "players/landingpage";

  const response = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailVoucher(id: string | string[] | undefined) {
  const ENDPOINT = `players/${id}/detail`;

  const response = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse;
}

export async function getGameCategory() {
  const ENDPOINT = `players/category`;

  const response = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function setCheckout(data: CheckoutTypes) {
  const url = `${BASE_URL}/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
