import { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import ProgramModal from '../../components/dashboard/ProgramModal';

const Programs = () => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      title: 'Business Strategy Workshop',
      status: 'Active',
      startDate: '2024-04-01',
      endDate: '2024-04-03',
      price: 999,
      description: 'A comprehensive workshop on business strategy development and implementation.',
    },
    {
      id: 2,
      title: 'Digital Transformation Program',
      status: 'Draft',
      startDate: '2024-05-15',
      endDate: '2024-05-17',
      price: 1499,
      description: 'Learn how to transform your business for the digital age.',
    },
    {
      id: 3,
      title: 'Leadership Development',
      status: 'Archived',
      startDate: '2024-03-01',
      endDate: '2024-03-03',
      price: 799,
      description: 'Develop essential leadership skills for modern organizations.',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = programs.filter((program) =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProgram = () => {
    setSelectedProgram(null);
    setIsModalOpen(true);
  };

  const handleEditProgram = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleDeleteProgram = (id) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      setPrograms(programs.filter((program) => program.id !== id));
    }
  };

  const handleSubmitProgram = (formData) => {
    if (selectedProgram) {
      setPrograms(
        programs.map((program) =>
          program.id === selectedProgram.id
            ? { ...program, ...formData }
            : program
        )
      );
    } else {
      const newProgram = {
        id: Date.now(),
        ...formData,
      };
      setPrograms([...programs, newProgram]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Programs Management
        </h1>
        <button
          onClick={handleAddProgram}
          className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
        >
          <FaPlus className="mr-2" />
          Add New Program
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPrograms.map((program) => (
              <tr key={program.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {program.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      program.status
                    )}`}
                  >
                    {program.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {program.startDate} - {program.endDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${program.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEditProgram(program)}
                    className="text-cyan-600 hover:text-cyan-900 mr-3"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteProgram(program.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProgramModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        program={selectedProgram}
        onSubmit={handleSubmitProgram}
      />
    </div>
  );
};

export default Programs; 