
import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsArrowRight, BsJournalBookmarkFill, BsStarFill, BsTools } from 'react-icons/bs'

export default function Comms() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/gca-exam.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-light-blue px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsTools className='text-sm'></BsTools>
							<p>Recursos</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Manual de comunicaciones</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						Manual de Comunicaciones, una guía esencial para una comunicación efectiva en el ámbito de
						la aviación. La comunicación clara y precisa es fundamental tanto para los controladores
						de tránsito aéreo (ATC) como para los pilotos, ya que garantiza la seguridad y eficiencia
						en todas las fases de un vuelo.
					</p>
					<p className='text-text-color text-lg mb-8'>
						El manual está diseñado para abordar diversos aspectos de la comunicación en la aviación,
						tanto desde la perspectiva de los pilotos como de los controladores de tránsito aéreo.
						Cubrirá temas clave, como:
					</p>

					<ul className='text-text-color text-lg mb-8 ml-5'>
						<li><span className='text-text-white'>1.</span> Fraseología y terminología estándar</li>
						<li><span className='text-text-white'>2.</span> Procedimientos de comunicación</li>
						<li><span className='text-text-white'>3.</span> Comunicación en situaciones de emergencia</li>
						<li><span className='text-text-white'>4.</span> Uso adecuado de los sistemas de comunicación</li>
					</ul>


					<p className='text-text-color text-lg mb-8'>
						Para acceder al manual completo y mejorar tus habilidades de comunicación en la aviación,
						haz clic en el botón de abajo.
					</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-green rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsJournalBookmarkFill className='text-4xl text-text-white'></BsJournalBookmarkFill>
							</div>
							<div className='w-full'>
								<h3 className='text-text-white max-md:mb-3'>Manual de comunicaciones</h3>
								<p className='text-text-color'>Accede al documento guía para mejorar las comunicaciones.</p>
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
