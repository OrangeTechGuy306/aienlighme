import { useState } from 'react';
import { FaUser, FaLock, FaBell, FaGlobe, FaSave } from 'react-icons/fa';

const Settings = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: 'Admin User',
      email: 'admin@example.com',
      phone: '+1 234 567 8900',
      position: 'Administrator',
    },
    preferences: {
      notifications: true,
      language: 'en',
      timezone: 'UTC',
    },
    security: {
      twoFactorAuth: false,
      password: '',
      confirmPassword: '',
    },
  });

  const handleInputChange = (section, field, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value,
      },
    });
  };

  const handleSave = (section) => {
    // Here you would typically make an API call to save the settings
    alert(`${section} settings saved successfully!`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Profile Settings */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center mb-4">
          <FaUser className="text-cyan-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Profile Settings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={settings.profile.name}
              onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={settings.profile.phone}
              onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              value={settings.profile.position}
              onChange={(e) => handleInputChange('profile', 'position', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        <button
          onClick={() => handleSave('Profile')}
          className="mt-4 flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
        >
          <FaSave className="mr-2" />
          Save Profile
        </button>
      </div>

      {/* Preferences Settings */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center mb-4">
          <FaBell className="text-cyan-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={settings.preferences.notifications}
              onChange={(e) => handleInputChange('preferences', 'notifications', e.target.checked)}
              className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Enable Notifications
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              value={settings.preferences.language}
              onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timezone
            </label>
            <select
              value={settings.preferences.timezone}
              onChange={(e) => handleInputChange('preferences', 'timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time</option>
              <option value="PST">Pacific Time</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => handleSave('Preferences')}
          className="mt-4 flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
        >
          <FaSave className="mr-2" />
          Save Preferences
        </button>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <FaLock className="text-cyan-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Security</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={settings.security.twoFactorAuth}
              onChange={(e) => handleInputChange('security', 'twoFactorAuth', e.target.checked)}
              className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Enable Two-Factor Authentication
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={settings.security.password}
              onChange={(e) => handleInputChange('security', 'password', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={settings.security.confirmPassword}
              onChange={(e) => handleInputChange('security', 'confirmPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        <button
          onClick={() => handleSave('Security')}
          className="mt-4 flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
        >
          <FaSave className="mr-2" />
          Save Security Settings
        </button>
      </div>
    </div>
  );
};

export default Settings; 