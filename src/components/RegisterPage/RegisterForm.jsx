import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <div className="mb-8 flex justify-center">
        <Link to="/login" className="px-6 py-2 text-2xl font-semibold text-gray-400 hover:text-gray-900">Login</Link>
        <button className="px-6 py-2 text-2xl font-semibold text-gray-900">Register</button>
      </div>
      <p className="mb-6 text-center text-sm text-gray-600">
        There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.
      </p>
      <form>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="username">
            Username *
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
            Email address *
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
            Password *
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          />
        </div>
        <div className="mb-6 space-y-2">
          <div className="flex items-center">
            <input type="radio" id="customer" name="userType" value="customer" className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500" defaultChecked />
            <label htmlFor="customer" className="ml-3 block text-sm font-medium text-gray-700">I am a customer</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="vendor" name="userType" value="vendor" className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500" />
            <label htmlFor="vendor" className="ml-3 block text-sm font-medium text-gray-700">I am a vendor</label>
          </div>
        </div>
        <p className="mb-6 text-xs text-gray-600">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
          <a href="#" className="font-semibold text-purple-600 hover:underline">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
