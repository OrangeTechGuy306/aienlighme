import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


// eslint-disable-next-line
const Navbar = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <img src="/assets/logo.png" alt="" className='w-[30px]'/>
            <div>
              <span>Enlight</span>
              <span className='text-red-600'>ME</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="">
             Home
            </Link>
            <Link to="/about" className="">
              About
            </Link>
            <Link to="/services" className="">
              Services
            </Link>
            <Link to="/programs" className="">
              Programs
            </Link>
            <Link to="/blog" className="">
              Blog
            </Link>
            <Link to="/contact" className="">
              Contact
            </Link>
            {/* <button
              onClick={() => changeLanguage('fr')}
              className=""
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className=""
            >
              EN
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/programs"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Programs
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              {/* <div className="flex space-x-4">
                <button
                  onClick={() => {
                    changeLanguage('fr');
                    toggleMenu();
                  }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  FR
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    toggleMenu();
                  }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  EN
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 