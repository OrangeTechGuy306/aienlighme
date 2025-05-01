import { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaEye, FaDownload } from 'react-icons/fa';

const Applications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      program: 'Business Strategy Workshop',
      status: 'Pending',
      date: '2024-03-15',
      resume: 'resume.pdf',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      program: 'Digital Transformation Program',
      status: 'Approved',
      date: '2024-03-14',
      resume: 'resume.pdf',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'm.brown@example.com',
      program: 'Leadership Development',
      status: 'Rejected',
      date: '2024-03-13',
      resume: 'resume.pdf',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState(null);

  const filteredApplications = applications.filter((application) =>
    application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Applications
        </h1>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications List */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <div
                key={application.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedApplication?.id === application.id ? 'bg-cyan-50' : ''
                }`}
                onClick={() => handleViewApplication(application)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{application.name}</p>
                    <p className="text-sm text-gray-500">{application.email}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{application.program}</p>
                  <p className="text-sm text-gray-500">{application.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Detail */}
        <div className="lg:col-span-2">
          {selectedApplication ? (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedApplication.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {selectedApplication.email}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedApplication.id, 'Approved')}
                    className="p-2 text-green-600 hover:text-green-900"
                    title="Approve"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedApplication.id, 'Rejected')}
                    className="p-2 text-red-600 hover:text-red-900"
                    title="Reject"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Program</h3>
                  <p className="text-gray-900">{selectedApplication.program}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Application Date</h3>
                  <p className="text-gray-900">{selectedApplication.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      selectedApplication.status
                    )}`}
                  >
                    {selectedApplication.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Resume</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => window.open(selectedApplication.resume, '_blank')}
                      className="flex items-center text-cyan-600 hover:text-cyan-900"
                    >
                      <FaEye className="mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => window.open(selectedApplication.resume, '_blank')}
                      className="flex items-center text-cyan-600 hover:text-cyan-900"
                    >
                      <FaDownload className="mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-full">
              <p className="text-gray-500">Select an application to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications; 