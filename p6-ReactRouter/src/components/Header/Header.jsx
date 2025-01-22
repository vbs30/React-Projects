import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-700" : "text-grey-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lightblue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-700" : "text-grey-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lightblue-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-700" : "text-grey-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lightblue-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/github"
                  className={({ isActive }) =>
                    `${isActive ? "text-blue-700" : "text-grey-700"} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lightblue-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

