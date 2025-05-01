import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUserCog, 
  FaBook, 
  FaBlog, 
  FaEnvelope, 
  FaFileAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: <FaHome />, label: 'Overview' },
    { path: '/dashboard/programs', icon: <FaBook />, label: 'Programs' },
    { path: '/dashboard/blogs', icon: <FaBlog />, label: 'Blogs' },
    { path: '/dashboard/applications', icon: <FaFileAlt />, label: 'Applications' },
    { path: '/dashboard/messages', icon: <FaEnvelope />, label: 'Messages' },
    { path: '/dashboard/settings', icon: <FaUserCog />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-cyan-500 text-white lg:hidden"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Dashboard
          </h2>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : ''
        }`}
      >
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 