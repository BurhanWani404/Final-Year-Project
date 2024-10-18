import React from 'react';

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url('money2.jpg')` }}>
      {/* Centered content */}
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="flex w-full max-w-5xl bg-white bg-opacity-50 shadow-lg rounded-lg">
          {/* Left Side: Text Content */}
          <div className="w-1/2 p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-5">Secure Cross-Border Money Transfers</h1>
            <p className="text-lg text-gray-700 mb-6">
              Easily manage money transfers between individuals abroad and recipients in Pakistan. 
              Our platform allows you to track transactions and manage loans, ensuring your financial 
              interactions are safe and reliable.
            </p>
            <p className="text-lg text-gray-700">
              Join us today and experience seamless, secure financial services.
            </p>
          </div>

          {/* Right Side: Buttons */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10">
            <button className="w-2/3 bg-blue-500 text-white py-3 rounded-lg text-lg mb-4 hover:bg-blue-600 transform hover:scale-105 transition duration-200">
              Sign In as Sender
            </button>
            <button className="w-2/3 bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600 transform hover:scale-105 transition duration-200">
              Sign In as Receiver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
