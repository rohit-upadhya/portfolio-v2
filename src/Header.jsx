import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHuggingface, SiKaggle } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="shadow-md px-8 py-4 bg-white flex justify-between items-center sticky top-0 z-50">
    <div className="font-semibold text-black">
      <nav className="space-x-6">
        <a href="https://rohit-upadhya.github.io/portfolio/" target="_blank" className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline hidden md:inline">Site v1</a>
        <Link to="/blog" className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline">Home</Link>
        <a href="#" className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline">Blog</a>
        <Link to="/blog/research" className="!text-gray-600 hover:!text-gray-900 visited:!text-gray-600 no-underline">Research</Link>
      </nav>
    </div>
    <nav className="space-x-6">
    <ul class="flex space-x-6 flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/rohit-upadhya" className="!text-gray-600 hover:!text-gray-900 align-middle" aria-label="GitHub" target="_blank">
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rohit-upadhya/" className="!text-gray-600 hover:!text-gray-900 align-middle" aria-label="LinkedIn" target="_blank">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://huggingface.co/rohit-upadhya" className="!text-gray-600 hover:!text-gray-900 align-middle" aria-label="HuggingFace" target="_blank">
              <SiHuggingface className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://www.kaggle.com/rohitupadhya" className="!text-gray-600 hover:!text-gray-900 align-middle" aria-label="Kaggle" target="_blank">
              <SiKaggle className="w-6 h-6" />
            </a>
          </li>
      </ul>
    </nav>
  </header>
  );
}
