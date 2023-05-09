import React from 'react';

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      <p className="text-3xl font-semibold text-gray-800 mt-8">Loading...⚓</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


