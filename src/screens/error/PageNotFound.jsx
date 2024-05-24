// PageNotFound.js



import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! The page you are looking for could not be found.</p>
        <a href="/" className="mt-6 text-lg text-blue-500 hover:underline">Go back to Home</a>
      </div>
    </div>
  );
}

export default PageNotFound;
