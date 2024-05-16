import { Link } from "react-router-dom";
import DeletePostBtn from "./delete-post-btn";
import { postProps } from "../../prop-types";
import EditPostBtn from "./edit-post-btn";
import useAuth from "../../hooks/use-auth";

const PostItem = ({ post }) => {

  const { auth } = useAuth()

  if (!post) {
    return null;
  }

  return (
    <div className="p-2 bg-slate-300 flex flex-col w-full gap-2 max-w-screen-sm shadow-md items-center justify-center text-center rounded">
      <h5 className="w-full font-bold">{post.title}</h5>
      <p
        className="w-full bg-slate-100 rounded py-1 whitespace-pre-wrap text-left p-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></p>
      <p className="w-full text-xs">{post.imageurl}</p>
      {post.imageurl ? (
        <div className="w-full max-w-screen-md">
          <Link to={post.imageurl} target="_blank">
            <img
              className="w-full rounded"
              src={post.imageurl}
              alt={"post-image"}
            />
          </Link>
        </div>
      ) : null}
      <div className="flex w-full justify-between items-center">
        <Link to={`/post/${post.id}`}>
          <button className="whitespace-nowrap">Read more</button>
        </Link>
        <div className="w-full text-xs">{post.imagename}</div>
        {auth ? <div className="flex gap-2">
          <EditPostBtn post={post} />
          <DeletePostBtn post={post} />
        </div> : null }
      </div>
    </div>
  );
};

export default PostItem;

PostItem.propTypes = postProps;
