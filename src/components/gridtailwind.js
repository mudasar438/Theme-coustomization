import React from 'react'

const Gridtailwind = () => {
  return (
   <>
   <div className="min-h-screen flex flex-col items-center bg-purple-500">
       <div className=" w-full flex-1 mx-w-4xl mx-auto p-10">
           <ul className='grid gap-8 border-2'>
               <li className='col-span-2 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className=' row-span-5 col-span-2 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-4 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-1 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-2 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-3 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-5 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-1 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-2 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
               <li className='col-span-2 bg-white rounded-xl shadow-xl '><div className="h-24"></div></li>
           </ul>


       </div>
       Tailwind Grid Learn With Tailwind Lab
   </div>
   </>
  )
}

export default Gridtailwind;