import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHuggingface, SiKaggle } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md px-8 py-4 bg-white flex justify-between items-center sticky top-0 z-50">
      {/* Left Side */}
      <div className="font-semibold text-black flex items-center">
        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none mr-4"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="https://rohit-upadhya.github.io/portfolio/"
            target="_blank"
            className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
          >
            Site v1
          </a>
          <Link
            to="/portfolio-v2"
            className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
          >
            Home
          </Link>
          <Link
            to="/portfolio-v2/blogs"
            className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
          >
            Blog
          </Link>
          <Link
            to="/portfolio-v2/research"
            className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
          >
            Research
          </Link>
        </nav>
      </div>

      {/* Right Side Icons */}
      <nav>
        <ul className="flex space-x-6 items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://github.com/rohit-upadhya"
              className="!text-gray-600 hover:!text-gray-900 align-middle"
              aria-label="GitHub"
              target="_blank"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rohit-upadhya/"
              className="!text-gray-600 hover:!text-gray-900 align-middle"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://huggingface.co/rohit-upadhya"
              className="!text-gray-600 hover:!text-gray-900 align-middle"
              aria-label="HuggingFace"
              target="_blank"
            >
              <SiHuggingface className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/rohitupadhya"
              className="!text-gray-600 hover:!text-gray-900 align-middle"
              aria-label="Kaggle"
              target="_blank"
            >
              <SiKaggle className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
  <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden z-40">
    <nav className="flex flex-col space-y-4 px-8 py-4">
      <a
        href="https://rohit-upadhya.github.io/portfolio/"
        target="_blank"
        onClick={() => setMenuOpen(false)}
        className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
      >
        Site v1
      </a>
      <Link
        to="/portfolio-v2"
        onClick={() => setMenuOpen(false)}
        className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
      >
        Home
      </Link>
      <Link
        to="/portfolio-v2/blogs"
        onClick={() => setMenuOpen(false)}
        className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
      >
        Blog
      </Link>
      <Link
        to="/portfolio-v2/research"
        onClick={() => setMenuOpen(false)}
        className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline"
      >
        Research
      </Link>
    </nav>
  </div>
)}
    </header>
  );
}
