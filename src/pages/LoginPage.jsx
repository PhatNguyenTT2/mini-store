import React from 'react';
import Layout from '../components/Layout/Layout';
import Breadcrumb from '../components/LoginPage/Breadcrumb';
import LoginForm from '../components/LoginPage/LoginForm';

const LoginPage = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/', isCurrent: false },
    { name: 'My account', href: '/login', isCurrent: true },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
