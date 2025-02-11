import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_GITHUB_URL}`,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

// search users from the GitHub API
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await api.get(`/search/users?${params}`);
  return res.data.items;
};

// get user and repos data
export const getUserandRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    api.get(`/users/${login}`),
    api.get(`/users/${login}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};
