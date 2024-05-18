import { forwardRef } from "react";
import { inputProps } from "../../prop-types";

const Input = forwardRef(({ type = "text", className, ...restProps }, ref) => {
  return (
    <>
      <input
        type={type}
        {...restProps}
        ref={ref}
        className={`px-2 py-1 rounded outline-none ${className}`}
      />
    </>
  );
});

Input.displayName = "Input";

export default Input;

Input.propTypes = inputProps;
