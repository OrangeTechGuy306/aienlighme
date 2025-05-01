import { useState } from 'react';
import { FaSearch, FaReply, FaTrash, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'client@example.com',
      subject: 'Inquiry about Business Strategy Program',
      content: 'I would like to know more about your business strategy program...',
      date: '2024-03-15',
      read: false,
    },
    {
      id: 2,
      sender: 'partner@example.com',
      subject: 'Partnership Opportunity',
      content: 'We are interested in exploring partnership opportunities...',
      date: '2024-03-14',
      read: true,
    },
    {
      id: 3,
      sender: 'applicant@example.com',
      subject: 'Application Status',
      content: 'I would like to check the status of my application...',
      date: '2024-03-13',
      read: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  const filteredMessages = messages.filter((message) =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReadMessage = (message) => {
    setMessages(
      messages.map((msg) =>
        msg.id === message.id ? { ...msg, read: true } : msg
      )
    );
    setSelectedMessage(message);
  };

  const handleDeleteMessage = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter((message) => message.id !== id));
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const handleReply = () => {
    if (replyContent.trim()) {
      // Here you would typically send the reply to your backend
      alert('Reply sent successfully!');
      setReplyContent('');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Messages
        </h1>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedMessage?.id === message.id ? 'bg-cyan-50' : ''
                }`}
                onClick={() => handleReadMessage(message)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {message.read ? (
                      <FaEnvelopeOpen className="text-gray-400 mr-2" />
                    ) : (
                      <FaEnvelope className="text-cyan-500 mr-2" />
                    )}
                    <span className="font-medium text-gray-900">
                      {message.sender}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{message.date}</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-900">
                    {message.subject}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedMessage.subject}
                  </h2>
                  <p className="text-sm text-gray-500">
                    From: {selectedMessage.sender}
                  </p>
                  <p className="text-sm text-gray-500">
                    Date: {selectedMessage.date}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteMessage(selectedMessage.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {selectedMessage.content}
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Reply
                </h3>
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  rows="4"
                  placeholder="Type your reply here..."
                />
                <button
                  onClick={handleReply}
                  className="mt-2 flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
                >
                  <FaReply className="mr-2" />
                  Send Reply
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-full">
              <p className="text-gray-500">Select a message to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages; 