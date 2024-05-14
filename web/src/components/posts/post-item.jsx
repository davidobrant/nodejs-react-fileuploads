import { Link } from "react-router-dom";
import DeletePostBtn from "./delete-post-btn";
import { postProps } from "../../PropTypes"

const PostItem = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div className="p-2 bg-slate-300 flex flex-col w-full gap-2 max-w-screen-md shadow-md items-center justify-center text-center">
      <h5 className="w-full">{post.title}</h5>
      <p className="w-full bg-slate-100 rounded py-1">{post.content}</p>
      <p className="w-full">{post.imageurl}</p>
      
      <p className="w-full">{post.id}</p>
      {post.imageurl ? (
        <div className="w-full max-w-screen-sm">
          <Link to={post.imageurl} target="_blank">
            <img className="w-full" src={post.imageurl} alt={"post-image"} />
          </Link>
        </div>
      ) : null}
      <div className="flex w-full justify-between">
        <Link to={`/post/${post.id}`}>
          <button className="whitespace-nowrap">Read more</button>
        </Link>
        <div className="w-full">{post.imagename}</div>
        <DeletePostBtn post={post} />
      </div>
    </div>
  );
};

export default PostItem;

PostItem.propTypes = postProps
