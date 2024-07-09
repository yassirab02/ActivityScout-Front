import React from 'react';


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl  text-gray-800 mb-4">Welcome to <span className='font-bold text-blue-700 font-[Poppins]'>Activity Scout</span></h1>
            <p className="text-gray-600 mb-8">Discover amazing Activities and join our community today.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-8">Features</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">Feature One</h3>
                  <p className="text-gray-600">Easy to use.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
                  <p className="text-gray-600">Enjoy all the activities in all the places.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
                  <p className="text-gray-600">Get notified with the new activities in your city.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Our Users Say</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"This is the best service I have ever used!"</p>
                  <h3 className="text-2xl font-bold">- User One</h3>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"Amazing features and excellent support."</p>
                  <h3 className="text-2xl font-bold">- User Two</h3>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"I highly recommend this to everyone."</p>
                  <h3 className="text-2xl font-bold">- User Three</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
