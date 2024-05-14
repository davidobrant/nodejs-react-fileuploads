import { postProps } from "../../PropTypes";
import usePosts from "../../hooks/use-posts";

const DeletePostBtn = ({ post }) => {
  const { deleteFn } = usePosts(post.id);

  if (!post) {
    return null;
  }

  const onClick = async () => {
    await deleteFn(post.id);
  };

  return <button onClick={onClick}>Delete</button>;
};

export default DeletePostBtn;

DeletePostBtn.propTypes = postProps;
