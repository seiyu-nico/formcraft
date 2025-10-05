import React from 'react';
import { UserRegistrationForm } from './UserRegistrationForm';

export const UserRegistrationWithSidebar: React.FC = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-6 lg:grid-cols-2">
      {/* Left Column - Form */}
      <div className="space-y-6">
        <UserRegistrationForm />
      </div>

      {/* Right Column - Information Sidebar */}
      <div className="space-y-6">
        <div className="sticky top-6 space-y-6">
          <div className="rounded-xl bg-primary-50 p-6 dark:bg-primary-900/20">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
              Why Register?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-800 dark:text-primary-200">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Access to exclusive features and content
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Personalized experience tailored to you
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Save your preferences and settings
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Join our community of users
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Security & Privacy
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Your data is encrypted and stored securely. We never share your personal information
              with third parties without your explicit consent.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              256-bit SSL encryption
            </div>
          </div>

          <div className="rounded-xl bg-success-50 p-6 dark:bg-success-900/20">
            <h3 className="text-lg font-semibold text-success-900 dark:text-success-100">
              Quick Tips
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-success-800 dark:text-success-200">
              <li>• Use a strong password with at least 8 characters</li>
              <li>• Your username will be visible to other users</li>
              <li>• Optional sections can be filled out later</li>
              <li>• All required fields are marked with *</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
