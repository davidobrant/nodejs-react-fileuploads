import PostList from "../../components/posts/post-list";
import usePosts from "../../hooks/use-posts";
import Loading from '../../components/loading'

const Post = () => {

  const { posts, loadingPosts} = usePosts()

  return (
    <>
      {loadingPosts ? (
        <Loading />
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
};

export default Post;
