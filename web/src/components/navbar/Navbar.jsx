import { Link } from "react-router-dom";
import { navlinks } from "../../nav-links";

const Navbar = () => {
  
  return (
    <nav className="flex justify-between p-2">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <ul className="flex gap-2">
        {navlinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div>sign-x</div>
    </nav>
  );
};

export default Navbar;
