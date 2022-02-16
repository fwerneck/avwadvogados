import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react';

const Navbar = () => {
const [hidden,setHidden] = useState(true);

    return(
        <nav className="bg-teal-800">
           <div className='max-w-5xl mx-auto p-4'>  
                <div className='flex justify-between '>

            <div className="mr-6 pl-4">
      
               <Image className='' alt='logo' src="/images/marca-AVW_negativa.png" width={292} height={55}/>
           </div>

          <div className='hidden items-center font-light md:flex md:items-end ' >
              <div className='text-lg lg:flex-grow space-x-4'> 
           <Link href='/'>
               <a className="block lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-400">Home</a>
               </Link>
           <Link href='socias'>
              <a className="block lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-400">Sócias</a> 
               </Link>
           <Link href='contato'>
               <a className="block lg:inline-block lg:mt-0 text-gray-300 hover:text-gray-400">Contato</a>
               </Link>
           </div>

           <div className='block mt-4 ml-6 lg:inline-block text-cyan-100 font-extrabold '>
               PT | EN
           </div>
        </div>
                
              <div className="flex md:hidden items-end">
                <button onClick={() => setHidden(s => !s)} className=" flex items-center px-3 py-2 border rounded text-gray-100 border-gray-200 hover:text-white hover:border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                 </button>
                </div>
            </div>
          </div> 
            {
                !hidden ?
                <div id='menuCel' className='items-center font-light md:hidden ' >
              <div className='text-lg lg:flex-grow '> 
           <Link href='/'>
               <a className="block mt-4 pl-2 text-gray-300 hover:text-gray-900">Home</a>
               </Link>
           <Link href='socias'>
              <a className="block mt-4 pl-2 text-gray-300 hover:text-gray-900">Sócias</a> 
               </Link>
           <Link href='contato'>
               <a className="block mt-4 pl-2 text-gray-300 hover:text-gray-900">Contato</a>
               </Link>
               </div>
           </div>
            :null}
        </nav>   
        );
}

export default Navbar;