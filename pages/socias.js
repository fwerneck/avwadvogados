import React, {useState} from "react";
import Image from 'next/image'

export default function CardList() {
    const [commentShown, setCommentShown] = useState({});
    const toggleComment = (id) => {
        setCommentShown(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
      };

    const socias = [
        {
            id: 1,
            nome:"Camila Werneck de Souza Dias",
            imgUrl:"/images/adv.jpeg",
            imgAlt:"Camila",
            email:"camila@awvadvogados.com.br",
            detalhes:"Bacharel em Direito pela Faculdade de Direito da Pontifícia Universidade Católica de São Paulo (1998). Mestre em Direito das Relações Sociais pela Faculdade de Direito da Pontifícia Universidade Católica de São Paulo (2005). Formação de mediadora pela COGEAE da PUC/SP.",
            detalhes2:"Trabalhou em renomados escritórios de advocacia sempre na área civil, consultiva e contenciosa e foi sócia de Tourinho Werneck Advogados de 2007 a 2011. Fundou, em 2011, o escritório AVW Advogados, onde atua, principalmente nas áreas do direito civil. Membro da Associação dos Advogados de São Paulo, do Instituto Brasileiro de Direito de Família e do Instituto dos Advogados de São Paulo. Conselheira do Instituto Fazendo História."
        },
        {
            id: 2,
            nome:"Raffaella Antici de Oliveira Lima",
            imgUrl:"/images/adv.jpeg",
            imgAlt:"Raffaella",
            email:"raffaella@awvadvogados.com.br",
            detalhes:"Bacharel em Direto pela Faculdade de Direito da Pontifícia Universidade Católica do Rio de Janeiro (1997). Formação no curso de “Orientation to the USA Law (1999) pela Faculdade UCDavis/Berkeley University; Pós Graduação Latu Sensu em Direito Ambiental sob a coordenação do Prof. Edis Milaré em São Paulo (2001), Especialização em contratos internacionais pela GVLaw/São Paulo (2005).",
            detalhes2:"Trabalhou em Veirano Advogados até 2011. Fundou, em 2011, o escritório AVW Advogados, onde atua, principalmente, nas áreas do direito civil, comercial e societário, tanto na esfera consultiva quanto contenciosa, além das áreas de meio ambiente e regulatório. Membro da Associação dos Advogados de São Paulo, do Instituto Brasileiro de Direito de Família e da Comissão de Direito de Família e Sucessões do Instituto dos Advogados de São Paulo."
        },
        {
            id: 3,
            nome:"Vera Rezende Vidigal",
            imgUrl:"/images/adv.jpeg",
            imgAlt:"Vera",
            email:"vera@awvadvogados.com.br",
            detalhes:"Bacharel em Direto pela Faculdade de Direito da Universidade de São Paulo (1999). Especialista em Direito Ambiental pela Faculdade de Saúde Pública da Universidade de São Paulo (2000). Pós-graduada em Administração de Empresas pela Fundação Getúlio Vargas - FGV de São Paulo (2008).",
            detalhes2:"Trabalhou na Secretaria do Meio Ambiente e em renomados escritórios de advocacia. Fundou, em 2011, o escritório AVW Advogados, onde atua, sobretudo, nas áreas de meio ambiente, regulatório e imobiliário. É coordenadora do comitê de meio ambiente do CESA. Recebeu vários prêmios como uma das advogadas mais admiradas do Brasil em direito ambiental Análise Advocacia 500 (2014 e 2013) Chambers (2011)."
        },
    ];

    return (
        <ul>
            {socias.map( socias => {
                return(

        <li key={socias.id} className="grid grid-cols-3 sm:w-2/3 mx-auto text-right pr-6 bg-slate-300 border-teal-800 border-b-2 border-t-2 rounded-xl space-y-4 m-6 shadow-lg">
            <Image className=' relative inset-0 object-cover object-top rounded-xl' src={socias.imgUrl} width={310} height={385} alt={socias.imgAlt}/>
            <div className="col-span-2 ">
            <p className="text-lg font-bold">{socias.nome}</p>
            <p>{socias.email}</p>
             <button  onClick={() => toggleComment(socias.id)} className='mt-4'>
            <a href="#" className='inline-block px-4 py-2 rounded-lg bg-teal-700 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base' >+</a>
     	    </button>  
             {!commentShown[socias.id]? null:
             <div className="font-light pl-6 justify-between">
             <p >{socias.detalhes}</p>
             <p className="mt-2">{socias.detalhes2}</p>
             </div>
             } 
             </div>
        </li>
                )
            })}
        </ul>
            
    );
};

