import Image from 'next/image'
import React from 'react'
import { BsTools } from 'react-icons/bs'

export default function Resources() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue pb-56 relative">

				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-light-blue px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsTools className='text-sm'></BsTools>
							<p>Recursos</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Centro de recursos</h1>
					</div>
				</div>

				<div className="container relative px-8 mt-14">
					<div className='lg:flex gap-x-6'>
						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8'>
							<Image width={700} height={80} src="/images/avion.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									<h3 className='text-text-white text-xl font-semibold'>Principiantes</h3>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								</div>
								<p className='mt-5 text-text-color mb-5'>Descubre la guía completa diseñada exclusivamente para principiantes, donde encontrarás paso a paso toda la información y consejos necesarios para adentrarte en este fascinante mundo.</p>
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md'>Abrir guía</button>
							</div>
						</div>

						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8'>
							<Image width={700} height={80} src="/images/piloto.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									<h3 className='text-text-white text-xl font-semibold'>Pilotos</h3>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								</div>
								<p className='mt-5 text-text-color mb-5'>Usa las guías diseñadas por expertos que te proporcionarán los conocimientos y las habilidades necesarias para convertirte en un piloto de alto nivel y aumentar el nivel de realismo.</p>
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md'>Explorar guías</button>
							</div>
						</div>

						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8'>
							<Image width={700} height={80} src="/images/torrecontrol.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									<h3 className='text-text-white text-xl font-semibold'>Controladores</h3>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								</div>
								<p className='mt-5 text-text-color mb-5'>Familiarízate con nuestras guías de control de tráfico aéreo. Aprende los principios fundamentales, técnicas de comunicación y estrategias de planificación para mantener un flujo seguro y eficiente en el cielo.</p>
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md'>Explorar guías</button>
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	)
}
