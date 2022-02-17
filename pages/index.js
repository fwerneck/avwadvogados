import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (

    <div>
      <Head>
        <title>AVW Advogados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
     <div className='max-w-2xl mt-8 mx-auto grid gap-6 grid-cols-3'> 
        <div className="mt-6 grid col-span-2 p-2">
        <p className='text-gray-800'>O escritório Antici Vidigal Werneck Sociedade de Advogados foi constituído 
        pelas sócias Vera Rezende Vidigal e Raffaella Antici de Oliveira Lima, Camila Werneck de Souza Dias, 
         com o objetivo de prestar serviços de advocacia personalizados. </p>
         <p className='text-gray-800 mt-4'>A experiência adquirida pelas sócias com a extensa prática desenvolvida 
         nos mais de 15 anos de advocacia em enomados escritórios resultou na constituição de uma sociedade 
         que atua com visão ampla e interdisciplinar do Direito.</p>  
        </div>

        <Image className='grid mt-4 rounded shadow-neutral-600' src="/images/vaso.png" alt="vaso avw" width={270} height={410} />
        <Image className='grid mt-4 rounded shadow-neutral-600' src="/images/cadeiras.png" alt="caideiras avw" width={270} height={410} />

        <div className='col-span-2 ml-4'> 
        <p className='text-gray-800'>O escritório atua de forma consultiva e contenciosa nas seguintes áreas:</p>   
          <ul className='mt-4 ml-6 list-disc text-gray-800'>
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


    </div>


  )
}
