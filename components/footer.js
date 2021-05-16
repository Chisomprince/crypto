import React from 'react'

export default function Footer() {
    return (
        <footer className="relative bg-gray-300 pt-8 pb-6 ">

  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-5/12 px-4">
        <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-700">
          Find us on any of these platforms, we respond within hours.
        </h5>
        <div className="mt-6">
          <button
            className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
            type="button"
          >
            <i className="flex fab fa-twitter"></i></button
          ><button
            className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
            type="button"
          >
            <i className="flex fab fa-facebook-square"></i></button
          ><button
            className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
            type="button"
          >
            <i className="flex fab fa-dribbble"></i></button
          ><button
            className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
            type="button"
          >
            <i className="flex fab fa-github"></i>
          </button>
        </div>
      
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6 mt-4">
          <div className="w-full lg:w-4/12 md:w-6/12 px-0 ml-auto">
            <span
              className="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >Useful Links</span
            >
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="/about"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="/blog"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="https://www.github.com/abhinavs"
                  >Sing Up</a
                >
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 md:w-6/12 mt-4 sm:mt-0 md:px-4">
            <span
              className="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >Other Resources</span
            >
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="https://github.com/abhinavs/cookie/blob/master/LICENSE.md"
                  >FQA</a
                >
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="/terms"
                  >Terms &amp; Conditions</a
                >
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="/privacy-policy"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  href="/contact-us"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-400" />
    <div
      className="flex flex-wrap items-center md:justify-between justify-center"
    >
      <div className="w-full px-4 mx-auto text-center">
        <div className="text-gray-600 text-sm py-1 mt-4">
          Copyright © CTIR
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900"
            > 2021
            </a>
            </div>
      </div>
    </div>
  </div>
</footer>


    )
}
