import { useParams } from "react-router-dom";
import usePosts from "../../hooks/use-posts";
import PostItem from "../../components/posts/post-item";

const Post = () => {
  const { id } = useParams();
  const { post } = usePosts(id);

  return (
    <>
      <h1 className="text-lg font-bold mb-2">Post nr: {id}</h1>
      {post ? <PostItem post={post} /> : <p>No Post to display...</p>}
    </>
  );
};

export default Post;
