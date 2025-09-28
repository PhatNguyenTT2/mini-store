import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <div className="mb-8 flex justify-center">
        <button className="px-6 py-2 text-2xl font-semibold text-gray-900">Login</button>
        <Link to="/register" className="px-6 py-2 text-2xl font-semibold text-gray-400 hover:text-gray-900">Register</Link>
      </div>
      <p className="mb-6 text-center text-sm text-gray-600">
        If you have an account, sign in with your username or email address.
      </p>
      <form>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="username">
            Username or email address *
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
            Password *
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          />
        </div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-900">Remember me</label>
          </div>
          <a href="#" className="text-sm text-purple-600 hover:underline">Lost your password?</a>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
