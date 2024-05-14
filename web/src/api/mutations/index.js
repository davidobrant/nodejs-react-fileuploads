import api from "..";

export const createPost = async (payload) => {
  const { data } = await api.post("/posts", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deletePost = async (postId) => {
  return (await api.delete("/posts/" + parseInt(postId))).data;
};
