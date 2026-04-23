const BASE_URL = "http://10.48.41.126:8000";

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts/`);
  return res.json();
};

export const createPost = async (token, content) => {
  return fetch(`${BASE_URL}/posts/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content, image: "" }),
  });
};

export const loginUser = async (username, password) => {
  const res = await fetch(`${BASE_URL}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return res.json();
};  