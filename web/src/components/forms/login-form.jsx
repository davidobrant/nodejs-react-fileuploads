import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import Input from "../generics/input";
import PropTypes from "prop-types";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async ({ username, password }) => {
    try {
      await login({ username, password });
      navigate("..");
    } catch (err) {
      console.log("LOGIN FAILED...");
      navigate("..");
    }
  };

  const onClick = () => {
    navigate("..");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 bg-slate-200 shadow-lg py-8 rounded z-10 min-w-[300px]"
      >
        <h2 className="mb-2">Sign in</h2>
        <Input
          name="username"
          placeholder="username"
          {...register("username", {
            required: "Enter username",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
        />
        <ErrorMessage error={errors.username} />
        <Input
          type="password"
          name="password"
          placeholder="*******"
          {...register("password", {
            required: "Enter password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        <ErrorMessage error={errors.password} />
        <button
          type="submit"
          className="rounded border border-slate-400 px-2 mt-2 bg-amber-500 disabled:bg-slate-200"
          disabled={!isValid}
        >
          Login
        </button>
      </form>
      <div
        className="bg-neutral-800 opacity-50 absolute inset-0"
        onClick={onClick}
      ></div>
    </>
  );
};

export default LoginForm;

const ErrorMessage = ({ error }) => {
  return (
    <div className="h-2 flex items-center">
      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
