
import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsClipboard2Check, BsRocketFill, BsStarFill } from 'react-icons/bs'
import { LuTowerControl } from 'react-icons/lu'

export default function GCAExam() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/gca-exam.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<LuTowerControl className='text-sm'></LuTowerControl>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Guest Controller Approval</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						El GCA es un programa diseñado para fomentar la colaboración y el intercambio entre
						los controladores de IVAO de diferentes divisiones o regiones. Si eres un controlador
						experimentado en tu división y tienes curiosidad por conocer cómo se lleva a cabo el
						control de tránsito aéreo en Ecuador, el GCA es tu puerta de entrada.
					</p>
					<p className='text-text-color text-lg mb-8'>
						Al obtener la aprobación como controlador invitado, tendrás la oportunidad de controlar
						en el espacio aéreo ecuatoriano y trabajar junto a los controladores locales. Si estás
						interesado/a en participar en el programa GCA y explorar el espacio aéreo ecuatoriano,
						te invitamos a abrir el documento adjunto para obtener más información.
					</p>
					<p className='text-text-color text-lg mb-8'>
						Una vez que hayas revisado el documento y te sientas preparado/a para asumir esta posición,
						puedes solicitar el examen correspondiente al GCA. Este examen evaluará tus conocimientos
						y habilidades para asegurarse de que estás listo/a para enfrentar las responsabilidades del
						control de tránsito aéreo en el espacio aéreo ecuatoriano.
					</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-yellow rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsStarFill className='text-4xl text-text-white'></BsStarFill>
							</div>
							<div className='w-full'>
								<h3 className='text-text-white max-md:mb-3'>Documentación para exámenes GCA en Ecuador</h3>
								<p className='text-text-color'>Accede al documento guía y prepárese para presentar el examen GCA.</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>Abrir guía</button>
							<button className='bg-pink text-text-white px-10 py-2 rounded-md max-md:w-full hover:px-11 transition-all'>Solicitar examen</button>
						</div>
					</div>

					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
