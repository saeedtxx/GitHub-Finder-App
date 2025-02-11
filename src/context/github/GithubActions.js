import axios from "axios";

const token = process.env.REACT_APP_GITHUB_TOKEN;
const api = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  headers: token ? { Authorization: `token ${token}` } : {},
});

// Search users from the GitHub API
export const searchUsers = async (text) => {
  try {
    const params = new URLSearchParams({ q: text });
    const res = await api.get(`/search/users?${params}`);
    return res.data.items;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message
    );
    return [];
  }
};

// Get user and repos data
export const getUserandRepos = async (login) => {
  try {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const [user, repos] = await Promise.all([
      api.get(`/users/${login}`),
      api.get(`/users/${login}/repos?${params}`),
    ]);
    return { user: user.data, repos: repos.data };
  } catch (error) {
    console.error(
      "Error fetching user or repos:",
      error.response?.data || error.message
    );
    return { user: null, repos: [] };
  }
};
