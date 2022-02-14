import Image from 'next/image'

export default function Sociasdetails (){

    return(
        <div id="camila" className="p-10 max-w-5xl mx-auto">
            <div className="flex rounded-lg bg-white shadow-lg overflow-hidden">
                <Image className='flex-1 w-32 absolute inset-0 h-full object-cover object-top' src="/images/adv.jpeg" width={310} height={385} />
            <div className='flex-1 w-64'>
                <h1 className='font-bold m-4'>Camila Werneck de Souza Dias</h1>
                <p className='font-light m-4'>
            Nascida em 1976, na cidade de São Paulo, SP. Bacharel em Direito pela Faculdade de Direito da 
            Pontifícia Universidade Católica de São Paulo (1998). Mestre em Direito das Relações Sociais 
            pela Faculdade de Direito da Pontifícia Universidade Católica de São Paulo (2005). Formação
             de mediadora pela COGEAE da PUC/SP.</p> 
                 <p className='font-light ml-4 mt-2'>Trabalhou em renomados escritórios de advocacia sempre 
             na área civil, consultiva e contenciosa e foi sócia de Tourinho Werneck Advogados de 2007 a 
             2011. Fundou, em 2011, o escritório AVW Advogados, onde atua, principalmente nas áreas do 
             direito civil. Membro da Associação dos Advogados de São Paulo, do Instituto Brasileiro de
              Direito de Família e do Instituto dos Advogados de São Paulo. Conselheira do Instituto 
              Fazendo História.</p>

                <p className='mt-4'>
                    <a href="#" className='hover:underline'>camila@avwadvogados.com.br</a>
                </p>

                 <p className='mt-1'> Idiomas: português e inglês</p>
            
            </div>
            </div>


            <div id="raffaella"className="flex rounded-lg bg-white shadow-lg overflow-hidden mt-8">
            <Image className='flex-1 w-32 absolute inset-0 h-full object-cover object-top' src="/images/adv.jpeg" width={310} height={385} />
            <div className='flex-1 w-64'>
            <h1 className='font-bold m-4'>Raffaella Antici de Oliveira Lima</h1>
            <p className='font-light m-4'>
            Nascida em 1974, na cidade do Rio de Janeiro - RJ. Bacharel em Direto pela Faculdade de 
            Direito da Pontifícia Universidade Católica do Rio de Janeiro (1997). Formação no curso
             de “Orientation to the USA Law (1999) pela Faculdade UCDavis/Berkeley University; Pós 
             Graduação Latu Sensu em Direito Ambiental sob a coordenação do Prof. Edis Milaré em São 
             Paulo (2001), Especialização em contratos internacionais pela GVLaw/São Paulo (2005).
             </p>
             <p className='font-light ml-4 mt-2'> 
             Trabalhou em Veirano Advogados até 2011. Fundou, em 2011, o escritório AVW Advogados, 
             onde atua, principalmente, nas áreas do direito civil, comercial e societário, tanto na 
             esfera consultiva quanto contenciosa, além das áreas de meio ambiente e regulatório. 
             Membro da Associação dos Advogados de São Paulo, do Instituto Brasileiro de Direito de 
             Família e da Comissão de Direito de Família e Sucessões do Instituto dos Advogados de São Paulo.

            <p className='mt-4'>
                <a href="#" className='hover:underline'>raffaellalla@avwadvogados.com.br</a>
            </p>

           <p className='mt-1'> Idiomas: português e inglês</p>
            </p>
            </div>
            </div>


            <div id="vera" className="flex rounded-lg bg-white shadow-lg overflow-hidden mt-8">
            <Image className='flex-1 w-32 absolute inset-0 h-full object-cover object-top' src="/images/adv.jpeg" width={310} height={385} />
            <div className='flex-1 w-64'>
            <h1 className='font-bold m-4'>Vera Rezende Vidigal</h1>
            <p className='font-light m-4'>
            Nascida em 1975 na cidade de São Paulo. Bacharel em Direto pela Faculdade de Direito da 
            Universidade de São Paulo (1999). Especialista em Direito Ambiental pela Faculdade de 
            Saúde Pública da Universidade de São Paulo (2000). Pós-graduada em Administração de
             Empresas pela Fundação Getúlio Vargas - FGV de São Paulo (2008). 
             </p>
             <p className='font-light ml-4 mt-2'> Trabalhou na Secretaria
              do Meio Ambiente e em renomados escritórios de advocacia. Fundou, em 2011,
               o escritório AVW Advogados, onde atua, sobretudo, nas áreas de meio ambiente, 
               regulatório e imobiliário. É coordenadora do comitê de meio ambiente do CESA.
                Recebeu vários prêmios como uma das advogadas mais admiradas do Brasil em
                 direito ambiental Análise Advocacia 500 (2014 e 2013) Chambers (2011).

            <p className='mt-4'>
                <a href="#" className='hover:underline'>vera@avwadvogados.com.br</a>
            </p>

           <p className='mt-1'> Idiomas: português e inglês</p>
            </p>
            </div>
            </div>
        </div>
       
    )

}