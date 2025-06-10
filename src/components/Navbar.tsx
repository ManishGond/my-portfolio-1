import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        MyPortfolio
      </Link>
      <div className="space-x-4">
        { navLinks.map((link) => (
          <NavLink key={ link.path } to={ link.path } className={ ({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-300" }>
            { link.label }
          </NavLink>
        )) }
      </div>
    </nav>
  )
};

export default Navbar;
