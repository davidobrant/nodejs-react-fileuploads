import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import PropTypes from "prop-types";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const NavAuth = () => {
  const navigate = useNavigate();

  const { auth, user, logout } = useAuth();

  return (
    <>
      {auth ? (
        <>
          <span className="mr-2">{user.username}</span>
          <Button onClick={logout} icon={<FiLogOut />}>
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={() => navigate("/auth/login")} icon={<FiLogIn />}>
          Login
        </Button>
      )}
    </>
  );
};

export default NavAuth;

const Button = ({ children, className = "", icon, ...rest }) => {
  return (
    <button
      className={`bg-slate-200 hover:bg-slate-300 shadow-sm rounded px-2 flex items-center ${className}`}
      {...rest}
    >
      {children}
      {icon && <span className="ml-1 text-sm">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.element,
};
