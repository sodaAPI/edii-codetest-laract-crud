import React, { useState } from "react";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center gap-5 justify-between mx-[50px] sm:mx-[50px] py-4">
        <a href="/" className="flex items-center space-y-1">
          <div className="flex-row gap-2 sm:flex hidden text-2xl font-bold text-slate-900 hover:text-[#85a236] hover:font-extrabold transition transform duration-500 ease-in-out hover:scale-125">
            <div>Shop</div>
            <div>Management</div>
          </div>
          <div className="flex-col gap-2 sm:hidden flex text-2xl font-bold text-slate-900 hover:text-[#85a236] hover:font-extrabold transition transform duration-500 ease-in-out hover:scale-125">
            <div>Shop</div>
            <div>Management</div>
          </div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-sticky"
            aria-expanded={isDropdownOpen}>
            <span className="sr-only">Open Dropdown Menu</span>
            <svg
              className={`w-5 h-5 ${isDropdownOpen ? "text-[#85a236]" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="#85a236"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isDropdownOpen ? "flex pb-5" : "hidden"
          }`}
          id="navbar-sticky">
          <ul className="flex flex-col items-center gap-10 p-4 md:p-0 mt-4 font-medium border-[2px] border-[#85a236] rounded-xl md:flex-row md:mt-0 md:border-0">
            <li className="px-3 py-2 rounded-2xl transition transform duration-500 ease-in-out hover:scale-125">
              <a
                href="/"
                className="block py-2 px-3 text-slate-900 rounded hover:font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#85a236] md:p-0">
                Home
              </a>
            </li>
            <li className="transition transform duration-500 ease-in-out hover:scale-125">
              <a
                href="/management"
                className="block py-2 px-3 text-slate-900 rounded hover:font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#85a236] md:p-0">
                Management
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
