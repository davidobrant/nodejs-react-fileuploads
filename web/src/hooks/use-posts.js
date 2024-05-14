import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostById, getAllPosts } from "../api/queries";
import { createPost, deletePost } from "../api/mutations";

const usePosts = (postId) => {
  const queryClient = useQueryClient();

  const {
    data: post,
    isLoading: loadingPost,
    isError: errorPost,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  });

  const {
    data: posts,
    isLoading: loadingPosts,
    isError: errorPosts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  const {
    mutateAsync: create,
    isLoading: loadingCreate,
    isError: errorCreate,
    onSuccess: createSuccess,
  } = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  const {
    mutateAsync: deleteFn,
    isLoading: loadingDelete,
    isError: errorDelete,
    onSuccess: successDelete,
  } = useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      queryClient.invalidateQueries("post", [postId]);
    },
  });

  return {
    post,
    posts: posts && posts.length ? posts.sort((a,b) => b.id - a.id) : [],
    loadingPost,
    loadingPosts,
    errorPost,
    errorPosts,
    create,
    loadingCreate,
    errorCreate,
    createSuccess,
    deleteFn,
    loadingDelete,
    errorDelete,
    successDelete,
  };
};

export default usePosts;
