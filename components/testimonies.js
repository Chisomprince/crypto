import React from 'react'

export default function Testimonies() {
    return (
        <div className='flex flex-row justify-center items-center bg-gray-900 mt-10 p-4'>
             <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="1.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto h-40 w-40 object-cover object-top"
                  
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold text-white">Moses Chisom</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Financialist
                  </p>
                   <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    we are here to simplify process and bring your financial transaction to its peak, 
                    we will never disappoint. always in and ready for business
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-google"></i></button
                    ><button
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
