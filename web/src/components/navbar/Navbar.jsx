import { Link } from "react-router-dom";
import NavAuth from "./nav-auth";
import useAuth from "../../hooks/use-auth";

const Navbar = () => {
  const { auth } = useAuth();

  const navlinks = [
    { path: "/", title: "Home" },
    { path: "/gallery", title: "Gallery" },
    { path: "/blog", title: "Blog" },
    { path: "/posts/new", title: "new", auth: true },
  ];

  return (
    <nav className="grid grid-cols-3 justify-between p-2 shadow-lg flex-nowrap">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <ul className="flex justify-center gap-2 z-10">
        {navlinks
          .filter((link) => !link.auth || auth)
          .map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
      </ul>
      <div className="flex justify-end">
        <NavAuth />
      </div>
    </nav>
  );
};

export default Navbar;
