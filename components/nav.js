import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        
            <nav
                className="top-0 sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800"
            >
                <div
                    className="container px-4 mx-auto flex flex-wrap items-center justify-between"
                >
                    <div
                    className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
                    >
                        <Link href="/">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        
                        >CTIR finance
                    </a>
                   </Link>
                    </div>
                    <div
                    className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
                    id="example-collapse-navbar"
                    >
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                            <Link href="/buy">
                                <a
                                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    
                                    ><i
                                    className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                                    ></i>
                                    buy
                                </a>
                            </Link>
                        </li>
                         <li className="flex items-center">
                             <Link href="/sell">
                             
                                <a
                                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    
                                    ><i
                                    className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                                    ></i>
                                    sell
                                </a>
                            </Link>
                        </li>
                         <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="/blog"
                            ><i
                            className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                            ></i>
                            escrow
                            </a>
                        </li>
                         <li className="flex items-center">
                        <a
                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="/blog"
                            ><i
                            className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                            ></i>
                            learn
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                       
                        <li className="flex items-center">
                            <Link href='/login'>
                        <button
                            className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                            type="button"
                            style={{"transition": "all 0.15s ease 0s;"}}
                        >
                            <i className="fas fa-arrow-alt-circle-right"></i> Log In
                        </button>
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
    </nav>
       
    )
}
