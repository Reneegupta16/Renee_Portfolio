
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { About } from './components/About-me';
import { Contactpage } from './components/contact';
import { Project } from './components/projects';
import { Home } from './components/home';
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>

        <div className="mb-20"></div>

        <hr className='pt-10 border-t border-[#a8a4f4] opacity-35' />

        <div className='pt-16 text-3xl text-white'>
          Follow Me
        </div>

        <div className="flex justify-center items-center gap-7 pt-12 h-8 text-white">
          <a href="https://www.linkedin.com/in/renée-gupta-b8a7661b6/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaLinkedin size='3rem' className="icon hover:bg-[#a8a4f4]" />
          </a>
          <a href="https://www.instagram.com/reneegupta16/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaInstagramSquare size='3rem' className="icon hover:bg-[#a8a4f4]" />
          </a>
          <a href="https://twitter.com/reneegupta16" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaTwitterSquare size='3rem' className="icon hover:bg-[#a8a4f4]" />
          </a>
          <a href="https://leetcode.com/reneegupta16" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <SiLeetcode size='3rem' className="icon hover:bg-[#a8a4f4]" />
          </a>
          <a href="https://github.com/Reneegupta16" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <FaGithubSquare size='3rem' className="icon hover:bg-[#a8a4f4]" />
          </a>
        </div>

        <div className='pt-32 text-white'>
          2024 Renée Gupta Portfolio
        </div>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const buttonClasses = (path) => classNames(
    'text-white',
    { 'underline': path === activeRoute },
    'hover:text-white',
    'px-3',
    'py-2',
    'rounded-md',
    'text-lg',
    'font-medium'
  );

  return (
    <nav className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex justify-center items-center text-white ">
              <motion.div whileHover={{ scale: 1.3 }}>
                <div
                  className="hover:cursor-pointer pl-3 text-3xl text-[#a8a4f4] font-semibold"
                  onClick={() => navigate("/")}
                >
                  Renée.
                </div>
              </motion.div>
            </div>
            <div className="hidden md:block text-2xl">
              <div className="ml-10 flex items-baseline space-x-4 text-2xl">
                <motion.button whileHover={{ scale: 1.3 }}>
                  <button
                    onClick={() => navigate("/projects")}
                    className={buttonClasses('/projects')}
                  >
                    Projects
                  </button>
                </motion.button>
                <motion.button whileHover={{ scale: 1.3 }}>
                  <button
                    onClick={() => navigate("/about")}
                    className={buttonClasses('/about')}
                  >
                    About me
                  </button>
                </motion.button>
                <motion.button whileHover={{ scale: 1.3 }}>
                  <button
                    onClick={() => navigate("/contact")}
                    className={buttonClasses('/contact')}
                  >
                    Contact me
                  </button>
                </motion.button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={() => navigate("/contact")}
                className="hover:underline text-[#a8a4f4] bg-transparent border border-solid border-[#a8a4f4] rounded py-2 px-4 hover:bg-[#a8a4f4] hover:text-white text-sm font-medium"
              >
                Get In Touch With Me!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => navigate("/projects")}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About me
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default App;
