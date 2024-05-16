import api from "..";

const headersFormData = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const mutations = {};

export const createPost = async (payload) =>
  (await api.post("/posts", payload, headersFormData)).data;

export const editPost = async ({ postId, payload }) =>
  (await api.put("/posts/" + parseInt(postId), payload, headersFormData)).data;

export const deletePost = async (postId) =>
  (await api.delete("/posts/" + parseInt(postId))).data;

mutations.login = async (payload) =>
  (await api.post("/auth/login/mock", payload)).data;

mutations.logout = async () => 
  (await api.post("/auth/logout")).data;
