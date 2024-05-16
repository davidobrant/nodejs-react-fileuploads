import { postProps } from "../../prop-types";
import { useNavigate } from "react-router-dom";

const EditPostBtn = ({ post }) => {
  const navigate = useNavigate();

  if (!post) {
    return null;
  }

  const onClick = () => {
    navigate(`/posts/edit/${post.id}`);
  };

  return <button onClick={onClick}>Edit</button>;
};

export default EditPostBtn;

EditPostBtn.propTypes = postProps;
