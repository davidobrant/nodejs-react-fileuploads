import api from ".."

export const getAllPosts = async () => (await api.get("/posts")).data

export const getPostById = async (postId) => (await api.get("/posts/" + postId)).data

export const getProfile = async () => (await api.get("/auth/profile")).data