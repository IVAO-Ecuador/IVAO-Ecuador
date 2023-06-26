'use client'

import CtaIVAO from '@/components/navigation/CtaIVAO'
import Link from 'next/link'
import { BsStarFill, } from 'react-icons/bs'

interface Event {
	id_evento: number;
	nombre_evento: string;
	descripcion_evento: string;
	imagen_evento: string;
	fecha_evento: string;
	tipo_evento: string;
	estado: string;
}

export default function Training() {

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/training.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsStarFill className='text-sm'></BsStarFill>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Entrenamiento</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						Mejora tus habilidades a través de nuestros entrenamientos personalizados. Serás instruido por expertos
						en el campo de la aviación, quienes te guiarán por el proceso y te acompañaran en tu desarrollo como
						piloto o controlador virtual. Selecciona a continuación qué tipo de entrenamiento deseas realizar:
					</p>



					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
