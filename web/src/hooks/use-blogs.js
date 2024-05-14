import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../api/queries";

const useBlogs = () => {
  const {
    data: blogs,
    isLoading: loadingBlogs,
    isError: errorBlogs,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  return {
    blogs,
    loadingBlogs,
    errorBlogs,
  };
};

export default useBlogs;
