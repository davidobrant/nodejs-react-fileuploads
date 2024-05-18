import PropTypes from "prop-types";

const Image = ({
  src,
  alt = "image",
  className = "",
  shadow = false,
  scale = false,
  ...rest
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`p-0.5 bg-slate-100 transition duration-100 ${shadow ? "shadow-md" : ""} ${scale ? "hover:scale-[1.02]" : ""} ${className}`}
        {...rest}
      />
    </>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  scale: PropTypes.bool,
};
