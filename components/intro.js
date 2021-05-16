import React from 'react'


export default function Intro() {
    return (
         <div 
            className='flex flex-col justify-center items-center w-full bg-center bg-cover  h-96 p-4'
            style={{'backgroundImage':' url("connetbitcoin.jpg")'}} 
         >
           
     
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  This is a simple example of a Landing Page you can build using
                  Cookie. You can see README file for installation and customization.
                </p>
         

           
        </div>
    )
}
