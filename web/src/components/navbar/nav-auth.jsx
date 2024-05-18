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
        <div className="flex items-center">
          <p className="mr-2 text-sm align-middle ">{user.username}</p>
          <NavAuthBtn onClick={logout} icon={<FiLogOut />}>
            Logout
          </NavAuthBtn>
        </div>
      ) : (
        <NavAuthBtn onClick={() => navigate("/auth/login")} icon={<FiLogIn />}>
          Login
        </NavAuthBtn>
      )}
    </>
  );
};

export default NavAuth;

const NavAuthBtn = ({ children, className = "", icon, ...rest }) => {
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

NavAuthBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.element,
};
