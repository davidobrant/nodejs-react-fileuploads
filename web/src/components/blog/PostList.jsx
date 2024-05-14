import usePosts from "../../hooks/use-posts";
import PostItem from "../posts/post-item";

const PostList = () => {
  const { posts } = usePosts();

  return (
    <div className="w-screen-md flex flex-col gap-4">
      {posts.length ? (
        posts.map((post) => <PostItem post={post} key={post.id} />)
      ) : (
        <p>No posts to display...</p>
      )}
    </div>
  );
};

export default PostList;
