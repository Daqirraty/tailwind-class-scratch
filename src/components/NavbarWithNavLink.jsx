import { NavLink } from "react-router-dom";

const navItems = [
  {name: "Home",path: "/" },
  { name: "Responsiveness", path: "/responsiveness" },
  { name: "Product", path: "/product" },
  { name: "Contact", path: "/contact" },
];

const NavbarWithNavlink = () => {
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-purple-700 font-bold border-b-2 border-purple-700 pb-2"
              : "text-gray-600 hover:text-purple-700 pb-2"
          }
        >
          {item.name}
        </NavLink>

        
      ))}
    </nav>
  );
};

export default NavbarWithNavlink;