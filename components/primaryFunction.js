import {Fade} from 'react-awesome-reveal'


const data =[
  { 
    title:' We Buy',
    image:'',
    color:'red-400',
    description:' Divide details about your product or agency work into parts A paragraph describing a feature will be enough.'
  },
  { 
    title:'We Sell',
    image:'',
    color:'green-400',
    description:' Divide details about your product or agency work into parts A paragraph describing a feature will be enough.'
  },
  { 
    title:'Offer Escrow ',
    image:'',
    color:'blue',
    description:' Divide details about your product or agency work into parts A paragraph describing a feature will be enough.'
  },
  { 
    title:'Awarded Agency',
    image:'',
    color:'',
    description:' Divide details about your product or agency work into parts A paragraph describing a feature will be enough.'
  },
   { 
    title:'Trade',
    image:'',
    color:'yellow-400',
    description:' Divide details about your product or agency work into parts A paragraph describing a feature will be enough.'
  },
   { 
    title:'custom',
    image:'',
    color:'red-400',
    description:' Divide details about your product or agency work into parts A paragraph describing a feature will be enough.'
  },

]

export default function PrimaryFunction() {
  return (
   
     
 <section className="px-4 bg-gray-300 pb-20">
       
          <div className="flex flex-wrap  ">
            

            {data.map((item)=>(
              
               <a className="lg:pt-12 pt-4 w-full md:w-4/12 px-4 text-center hover:text-blue-600 hover:border-blue-700 group" href='#'>
              <Fade direction='top'>
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg group-hover:border-blue-600 border-2"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${item.color}`}
                  >
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">{item.title}</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                   {item.description}
                  </p>

                  
            <h3>Learn &rarr;</h3>
            
          </div>
                
              </div>
              </Fade>
            </a>
            
            ))}
           
            
            </div>
          
       
      </section>
     

   
  )
}
