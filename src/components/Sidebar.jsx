import { NavLink } from "react-router-dom";

let sidebarLinks = [
  {
    name: "Home",
    link: "/home",
    icon: "",
  },
  {
    name: "About",
    link: "/about",
    icon: "",
  },
  {
    name: "Contact",
    link: "/contact",
    icon: "",
  },
];

function Sidebar() {
  return (
    <div className="bg-red-600 col-span-2 row-span-10 p-2">
      <ul>
        {sidebarLinks.map((elem) => {
          return (
            <li className="border border-gray-300 px-2 py-1 mt-2">
              <NavLink to={elem.link} className="block">
                {elem.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
