import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';



export default function Socias(){



  return (
 


    <div>
    <Head>
    	<title>AWV Advogados | Sócias</title>
    </Head>

     <main className='max-w-5xl mx-auto'> 
       <div className='mt-8 grid gap-6 lg:grid-cols-2'>

       <div className="grid grid-cols-3 rounded-lg bg-white shadow-lg overflow-hidden">
          <Image className=' relative inset-0 object-cover object-top' src="/images/adv.jpeg" width={310} height={385} />
         <div className="col-span-2 ml-4">
              <h4 className='text-lg font-semibold text-gray-800'>Camila Werneck de Souza Dias</h4>
               <p className='mt-6'><a className='hover:underline' href="mailto:camila@avwadvogados.com.br">camila@avwadvogados.com.br</a></p>
    	      	<button className='mt-16 bottom-0'>
     		         <a className='inline-block px-5 py-2 transform transition hover:-translate-y-0.5 rounded-lg bg-teal-700 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base' href="sociasdetails#camila ">veja mais</a>
     	         </button>         
        </div>
      </div>

       <div className="grid grid-cols-3 rounded-lg bg-white shadow-lg overflow-hidden">
        <Image className='relative inset-0 object-cover object-top' src="/images/adv.jpeg" width={310} height={385} />
       <div className="col-span-2 ml-4">
        <h4 className='text-lg font-semibold text-gray-800'>Raffaella Antici de Oliveira Lima</h4>
         <p className='mt-6'><a className='hover:underline' href="mailto:raffaella@avwadvogados.com.br">raffaella@avwadvogados.com.br</a></p>
    		<button className='mt-16'>
            <a className='inline-block px-5 py-2 transform transition hover:-translate-y-0.5 rounded-lg bg-teal-700 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base' href="sociasdetails#raffaella ">veja mais</a>
     	   </button>  
        </div>
      </div>

       <div className="grid grid-cols-3 rounded-lg bg-white shadow-lg overflow-hidden">
        <Image className='relative inset-0 object-cover object-top' src="/images/adv.jpeg" width={310} height={385} />
       <div className="col-span-2 ml-4">
        <h4 className='text-lg font-semibold text-gray-800'>Vera Rezende Vidigal</h4>
         <p className='mt-6'><a className='hover:underline' href="mailto:vera@avwadvogados.com.br">vera@avwadvogados.com.br</a></p>
    		<button className='mt-16'>
          <a className='inline-block px-5 py-2 transform transition hover:-translate-y-0.5 rounded-lg bg-teal-700 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base' href="sociasdetails#vera ">veja mais</a>
     	</button>    
        </div>
      </div>
   </div>
   </main>


 </div>

)}