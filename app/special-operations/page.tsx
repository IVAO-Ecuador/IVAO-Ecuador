
import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsFillAirplaneEnginesFill, BsRocketFill } from 'react-icons/bs'

export default function SpecialOperations() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/special-operations.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsFillAirplaneEnginesFill className='text-sm'></BsFillAirplaneEnginesFill>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Operaciones especiales</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						¡Te invitamos a observar las operaciones especiales de Ecuador en la plataforma de IVAO! Descubre
						diversos temas relacionados con patrones de tráfico, altitudes y niveles de vuelo, clases de
						espacio aéreo y mucho más. Esta información es fundamental para elevar el nivel de simulación
						y garantizar la ejecución de buenos procedimientos.
					</p>
					<p className='text-text-color text-lg mb-8'>
						La guía de operaciones especiales ofrece valiosa información sobre las particularidades del espacio
						aéreo ecuatoriano, como las rutas de tráfico preferidas, las altitudes y niveles de vuelo recomendados,
						así como las clases de espacio aéreo utilizadas en Ecuador. Además, te proporcionará conocimientos sobre
						los procedimientos y normas específicas que debes seguir al volar en el espacio aéreo del país.
					</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-green rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsRocketFill className='text-4xl text-text-white'></BsRocketFill>
							</div>
							<div className='w-full'>
								<h3 className='text-text-white max-md:mb-3'>Documentación para operaciones especiales en Ecuador</h3>
								<p className='text-text-color'>Accede al documento guía de procedimientos para operaciones especiales.</p>
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
