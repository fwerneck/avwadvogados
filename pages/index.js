import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (

    <div>
      <Head>
        <title>AVW Advogados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
     <div className='w-full text-lg sm:w-2/3 p-4 mt-8 mx-auto bg-gray-300 rounded-lg font-light text-gray-900'> 
        
        <p className=''>O escritório Antici Vidigal Werneck Sociedade de Advogados foi constituído 
        pelas sócias <Link href="socias"> Vera Rezende Vidigal e Raffaella Antici de Oliveira Lima, Camila Werneck de Souza Dias,</Link> 
         com o objetivo de prestar serviços de advocacia personalizados. </p>
         <p className=' mt-4'>A experiência adquirida pelas sócias com extensa prática desenvolvida 
         nos mais de 15 anos de advocacia em enomados escritórios resultou na constituição de uma sociedade 
         que atua com visão ampla e interdisciplinar do Direito.</p>  
        
        <p className='mt-2'>O escritório atua de forma consultiva e contenciosa nas seguintes áreas:</p>   
          <ul className='mt-4 ml-6 list-disc text-r'>
            <li className=''>Direito Ambiental e Regulatório</li>
            <li>Direito Civil </li> 
              <ul className='ml-6 list-disc'>
            <li>Contratos</li>
            <li>Família e Sucessões</li>
            <li>Imobiliário</li>
            <li>Responsabilidade Civil</li>
          </ul>
            <li>Direito Comercial e Societário</li>
            <li>Direito Constitucional e Administrativo</li></ul>
            </div>
             


    </div>


  )
}
