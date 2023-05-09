import { BASE_URL } from ".";

export const api_login = async (payload) => {
  const uri = `${BASE_URL}/users/login`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || "something went wrong!");
  }
  return response;
};
export const api_signup = async (payload) => {
  const uri = `${BASE_URL}/users/mobilesignup`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: payload,
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || "something went wrong!");
  }
  return response;
};
