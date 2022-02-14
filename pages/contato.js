import Image from "next/image"

export default function Contato () {
	return(
		<main className="mt-6 max-w-screen-sm mx-auto text-gray-800 text-center">
			<Image src="/images/justica.jpeg" layout="fixed" width={728} height={455} alt="martelo marrom" />
			<p>Rua Ferreira de Araújo, 202 cj.52 </p>
			<p>CEP 05428-000 | São Paulo - SP - Brasil</p>
			<p>Tel +55 (11) 3284 1163 | avw@avwadvogados.com.br</p>
		</main>	
		)
}
