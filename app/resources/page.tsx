import Image from 'next/image'
import React from 'react'
import { BsStarFill, BsTools } from 'react-icons/bs'

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
						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
							<Image width={700} height={80} src="/images/avion.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									<h3 className='text-text-white text-xl font-semibold'>Principiantes</h3>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								</div>
								<p className='mt-5 text-text-color mb-5'>Descubre la guía completa diseñada exclusivamente para principiantes, donde encontrarás paso a paso toda la información y consejos necesarios para adentrarte en este fascinante mundo.</p>
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md hover:bg-gray transition-all'>Abrir guía</button>
							</div>
						</div>

						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
							<Image width={700} height={80} src="/images/piloto.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									<h3 className='text-text-white text-xl font-semibold'>Pilotos</h3>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								</div>
								<p className='mt-5 text-text-color mb-5'>Usa las guías diseñadas por expertos que te proporcionarán los conocimientos y las habilidades necesarias para convertirte en un piloto de alto nivel y aumentar el nivel de realismo.</p>
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md hover:bg-gray transition-all'>Explorar guías</button>
							</div>
						</div>

						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
							<Image width={700} height={80} src="/images/torrecontrol.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									<h3 className='text-text-white text-xl font-semibold'>Controladores</h3>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								</div>
								<p className='mt-5 text-text-color mb-5'>Familiarízate con nuestras guías de control de tráfico aéreo. Aprende los principios fundamentales, técnicas de comunicación y estrategias de planificación para mantener un flujo seguro y eficiente en el cielo.</p>
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md hover:bg-gray transition-all'>Explorar guías</button>
							</div>
						</div>
					</div>

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

					<div className='mt-16'>
						<h3 className='text-text-white text-2xl mb-8'>Últimos documentos actualizados</h3>

						<div className='lg:flex items-center justify-between border-documents p-8 
									hover:bg-sub-menus rounded-sm transition-all cursor-pointer mb-3 max-lg:bg-sub-menus max-lg:rounded-md'>
							<div className='lg:flex gap-x-5 items-center '>
								<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								<h4 className='text-text-color'>Lineamientos para examen GCA</h4>
							</div>
							<div>
								<p className='text-text-color'>Actualizado el 05/10/2023</p>
							</div>
						</div>

						<div className='lg:flex items-center justify-between border-documents p-8 
									hover:bg-sub-menus rounded-sm transition-all cursor-pointer mb-3 max-lg:bg-sub-menus max-lg:rounded-md'>
							<div className='lg:flex gap-x-5 items-center '>
								<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
								<h4 className='text-text-color'>Lineamientos para examen GCA</h4>
							</div>
							<div>
								<p className='text-text-color'>Actualizado el 05/10/2023</p>
							</div>
						</div>

						


					</div>
				</div>
			</div>
		</div>
	)
}
