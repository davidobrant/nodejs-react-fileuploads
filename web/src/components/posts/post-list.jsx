import { postsProps } from "../../PropTypes";
import PostItem from "./post-item";

const PostList = ({ posts }) => {
  return (
    <div className="max-w-screen-sm sm:max-w-screen-md flex flex-col gap-4">
      {posts.length ? (
        posts.map((post) => <PostItem post={post} key={post.id} />)
      ) : (
        <p>No posts to display...</p>
      )}
    </div>
  );
};

export default PostList;

PostList.propTypes = postsProps;