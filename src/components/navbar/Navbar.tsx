import  { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-700"
            >
              BookShelf
            </Link>
          </div>

          {/* Right side: Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/books"
                className="text-gray-700 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                All Books
              </Link>
              <Link
                to="/create-book"
                className="text-gray-700 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Add Book
              </Link>
              <Link
                to="/borrow-summary"
                className="text-gray-700 hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Borrow Summary
              </Link>
            </div>
          </div>

          {/* Right side: Hamburger Button for Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon changes based on the menu state */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, shows/hides based on menu state */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden border-t border-gray-200`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/all-books"
            className="text-gray-700 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            All Books
          </a>
          <a
            href="/add-book"
            className="text-gray-700 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Add Book
          </a>
          <a
            href="/borrow-summary"
            className="text-gray-700 hover:bg-indigo-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Borrow Summary
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
