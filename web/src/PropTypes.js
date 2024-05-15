import PropTypes from "prop-types";

export const postProps = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageurl: PropTypes.string,
    imagename: PropTypes.string,
    id: PropTypes.number,
  }),
};

export const postsProps = {
  posts: PropTypes.arrayOf(PropTypes.shape(postProps)).isRequired,
};
