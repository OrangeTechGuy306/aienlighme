import { FaBook, FaBlog, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Overview = () => {
  const stats = [
    { label: 'Total Programs', value: '12', icon: <FaBook />, color: 'bg-blue-500' },
    { label: 'Active Blogs', value: '24', icon: <FaBlog />, color: 'bg-green-500' },
    { label: 'New Applications', value: '8', icon: <FaFileAlt />, color: 'bg-yellow-500' },
    { label: 'Unread Messages', value: '5', icon: <FaEnvelope />, color: 'bg-red-500' },
  ];

  const quickActions = [
    { label: 'Add New Program', path: '/dashboard/programs/new', icon: <FaBook /> },
    { label: 'Create Blog Post', path: '/dashboard/blogs/new', icon: <FaBlog /> },
    { label: 'View Applications', path: '/dashboard/applications', icon: <FaFileAlt /> },
    { label: 'Check Messages', path: '/dashboard/messages', icon: <FaEnvelope /> },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <a
              key={action.label}
              href={action.path}
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="mr-3 text-cyan-500">{action.icon}</div>
              <span className="text-gray-800 dark:text-white">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Add recent activity items here */}
          <p className="text-gray-500 dark:text-gray-400">No recent activity</p>
        </div>
      </div>
    </div>
  );
};

export default Overview; 