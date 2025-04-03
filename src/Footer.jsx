import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiHuggingface, SiKaggle, SiTailwindcss, SiVite } from 'react-icons/si';
import { motion } from 'framer-motion'; // <-- needed for <motion.a>

export default function Footer(){
    return (
      <footer className="bg-white shadow-sm light:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 lg:block">
          <span className="hidden md:inline">
              © 2024 Rohit Upadhya. All Rights Reserved.
            </span>
            <span className="mx-2 hidden md:inline">|</span>
            <a
              href="https://drive.google.com/file/d/1D4fi5DAxQWrwxS_MB9WVE_1f2lkyKMhY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm !text-gray-500 hover:underline hover:!text-gray-800 transition no-underline"
            >
              📜 Updated Resume
            </a>
            <span className="mx-2">|</span>
            <a
              href="mailto:rohitupadhya18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm !text-gray-500 hover:underline hover:!text-gray-800 transition no-underline"
            >
              ✍️ Contact
            </a>
          </span>
  
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:!text-gray-800 hidden lg:block">
            Made with love using{' '}
            <motion.a
              href="https://react.dev/"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              className="inline-block align-middle ml-1"
              target="_blank"
            >
              <FaReact className="text-gray-500 text-2xl align-middle hover:!text-gray-800" />
            </motion.a>
            {' '}, {' '}
          <span className="inline-block align-middle">
            <a href="https://tailwindcss.com/" target="_blank"><SiTailwindcss className="text-gray-500 text-2xl align-middle ml-1 hover:!text-gray-800" /></a>
          </span>
          {' '} & {' '}
          <span className="inline-block align-middle">
            <a href="https://vite.dev/" target="_blank"><SiVite className="text-gray-500 text-2xl align-middle ml-1 hover:!text-gray-800" /></a>
          </span>
          </div>
        </div>
      </footer>
    );
  }