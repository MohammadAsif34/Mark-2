import React from "react";
import logo from "/vite.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    { name: "home", active: "true", href: "/" },
    { name: "about", active: "false", href: "#" },
    { name: "portfolio", active: "false", href: "#" },
    { name: "blogs", active: "false", href: "#" },
    { name: "constact us", active: "false", href: "#" },
  ];
  const navItem2 = [
    { name: "Projects", href: "/projects" },
    { name: "Sigma Web-dev", href: "/sigma-web-dev" },
  ];
  return (
    <>
      <nav
        className="bg-gray-900 sticky top-0 flex items-center"
        style={{ width: "100%", minHeight: "80px" }}
      >
        <div className=" container h-full m-auto px-3   flex items-center sm:flex-wrap lg:flex-row">
          <div className=" p-2 ">
            <img src={logo} alt="" />
          </div>
          <div className="mx-16 flex-1 ">
            <ul className="flex text-white text-lg ">
              {navItem.map((item, index) => (
                <Link to={item.href}>
                  <li
                    key={item.name + index}
                    className="mr-5 px-4 py-1 bg-gray-800 rounded-lg capitalize hover:bg-gray-700"
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className=" rounded-full bg-gray-400 overflow-hidden p-2  ">
            <img src={logo} alt="" />
          </div>
        </div>
      </nav>
      <nav className="w-full h-10 bg-gray-700 ">
        <div className="container h-full m-auto px-4  text-white ">
          <ul className=" h-full flex  items-center text-md">
            <li className="px-3 text-2xl">
              <i className="bi bi-list"></i>
            </li>
            {navItem2.map((item, index) => (
              <Link to={item.href}>
                <li key={index} className="px-3">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
