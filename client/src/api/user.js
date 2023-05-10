import { BASE_URL } from ".";

export const api_searchUserByUsername = async (name) => {
  const uri = `${BASE_URL}/users/userByUsername?username=${name}&pageSize=1000`;
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || "something went wrong!");
  }
  return response;
};
export const api_userProfile = async (id) => {
  const uri = `${BASE_URL}/users/profile/${id}`;
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || "something went wrong!");
  }
  return response;
};
