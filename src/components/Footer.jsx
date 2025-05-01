

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {


  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
  ];

  return (
    
    <footer className="bg-blue-950 text-white pt-16 pb-8 px-5">

      <div className="container mx-auto px-4">
{/* grid grid-cols-1 md:grid-cols-4 */}
        <div className="flex justify-around flex-wrap gap-8">
          {/* Company Info */}
          <div className='md:w-[400px] w-[100%]'>
            <h3 className="text-xl font-bold mb-4">EnlightME Consultancy</h3>
            <p className="text-gray-400 mb-4">At EnlightME Edu Consults Ltd , we connect you to top-tier French institutions offering globally recognized programs taught 100% in English and French.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                 About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/programs" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>NO. 11, Aderinola Olamiju street Unity Estate Ojodu Berger Lagos State, Nigeria</li>
              <li>+234 703 325 9442</li>
              <li>info@enlightmeedu.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest news and updates.</p>
            <form className="flex gap-2 flex-wrap">
              <input
                type="email"
                placeholder={"Enter your email"}
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 md:w-[300px] w-[100%]"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EnlightME Edu. &copy; All Rights Reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer; 