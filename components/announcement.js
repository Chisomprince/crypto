import React, { useState } from 'react'

export default function Announcement() {
    const [open,setOpen] = useState(true)
    return (
        <div>
        {open &&
        <div className='py-2 z-40 bg-yellow-200 w-full sticky top-0 h-12 flex flex-row justify-center items-center'>
            <p className='text-center text-red-800 z-50 '>
                Enjoy 20% commission each time you referr a customer to us
            </p>
            
           <button
                className="justify-self-end self-end text-white bg-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                type="button"
                style={{"transition": "all 0.15s ease 0s;"}}
                onClick={()=>setOpen(!open)}
            >
                            <i className="fas fa-arrow-alt-circle-right"></i> close
             </button>
        </div>
        }
        </div>
    )
}
