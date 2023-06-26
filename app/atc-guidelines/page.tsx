
import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsClipboard2Check, BsRocketFill } from 'react-icons/bs'
import { LuTowerControl } from 'react-icons/lu'

export default function AtcGuidelines() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/atc-guidelines.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<LuTowerControl className='text-sm'></LuTowerControl>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Lineamientos examen ATC</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						El examen es una etapa crucial en tu camino hacia convertirte en un controlador de tránsito aéreo
						altamente capacitado en la simulación virtual. Como controlador, tendrás la importante responsabilidad de
						garantizar la seguridad y eficiencia del tráfico aéreo, coordinando y guiando a las aeronaves
						en su trayectoria de vuelo.
					</p>
					<p className='text-text-color text-lg mb-8'>
						El examen ha sido diseñado para evaluar tus conocimientos teóricos y habilidades prácticas en el campo
						del control de tránsito aéreo. Pondrá a prueba tu comprensión de los procedimientos y protocolos,
						tu capacidad de tomar decisiones rápidas y precisas, y tu aptitud para manejar situaciones de alta presión.
					</p>
					<p className='text-text-color text-lg mb-8'>
						A continuación podrás descargar el documento te proporcionará los lineamientos y pautas esenciales 
						que debes seguir durante el examen. Te informará sobre los requisitos técnicos, la duración del examen, 
						las instrucciones de respuesta y el enfoque mental necesario para enfrentar este examen.
					</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-cyan rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsClipboard2Check className='text-4xl text-text-white'></BsClipboard2Check>
							</div>
							<div className='w-full'>
								<h3 className='text-text-white max-md:mb-3'>Lineamientos para el examen ATC en Ecuador</h3>
								<p className='text-text-color'>Accede al documento guía de lineamientos para examen ATC.</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							<button className='bg-gray-200 text-text-white px-20 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>Abrir documento</button>
						</div>
					</div>

					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
