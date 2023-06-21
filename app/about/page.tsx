
import Image from 'next/image'
import React from 'react'
import { BsHeartFill, BsLamp } from 'react-icons/bs'

export default function About() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue pb-56 relative">
				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='flex items-center gap-x-3'>
							<div className='text-text-white bg-main-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
								<BsHeartFill className='text-sm'></BsHeartFill>
								<p>Historia</p>
							</div>
							<div className='bg-blue text-text-white px-3 py-1 rounded flex w-72 items-center justify-center gap-x-2 max-md:hidden'>
								<BsLamp></BsLamp>
								<p>Articulo de lectura - 2 minutos</p>
							</div>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Sobre IVAO Ecuador</h1>
					</div>
				</div>

				<div className='container mt-20 px-8'>
					<div>
						<h2 className='text-text-white font-bold text-3xl mb-10'>La historia de IVAO Ecuador</h2>
						<div className='xl:flex'>
							<div className='xl:w-1/2'>
								<p className='text-text-color mb-10 text-lg'>
									IVAO Ecuador es la división ecuatoriana de IVAO (International Virtual Aviation Organization), una red global
									de simulación de vuelo en línea que ha cautivado a entusiastas de la aviación en todo el mundo. IVAO Ecuador
									se dedica a brindar una experiencia realista y educativa a sus miembros, promoviendo la simulación de vuelo
									y el control de tráfico aéreo en un entorno virtual. Acompáñanos en este recorrido por su fascinante trayectoria.
								</p>

								<p className='text-text-color mb-10 text-lg'>
									El 12 de mayo de 2002 marca el inicio de la historia de IVAO Ecuador. En ese momento, entusiastas ecuatorianos de
									la aviación decidieron establecer la división local de IVAO para ofrecer a los amantes de los vuelos virtuales
									una plataforma de simulación realista y emocionante. Con determinación y pasión, dieron los primeros pasos para
									construir una comunidad sólida.
								</p>
							</div>
							<div className='xl:w-1/2 max-xl:hidden flex justify-center items-center'>
								<img src="/logos/logo-ivao.png" alt="" className='w-96' />
							</div>
						</div>


						<p className='text-text-color mb-10 text-lg'>
							En los años siguientes, IVAO Ecuador experimentó un crecimiento significativo. La comunidad se fortaleció con la
							llegada de nuevos miembros, ávidos de explorar el mundo de la simulación de vuelo en línea. Durante este período,
							IVAO Ecuador se enfocó en brindar servicios de calidad, ofreciendo programas de entrenamiento, eventos en línea y
							control de tráfico aéreo en tiempo real.
						</p>
					</div>

					<div className="grid grid-cols-5 grid-rows-6 gap-4 xl:h-[525px] lg:h-[400px] h-[250px] opacity-80 mb-10">
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-6"><Image src={'/images/about/a6.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-2"><Image src={'/images/about/c5.png'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-2 col-start-2 row-start-3"><Image src={'/images/about/c2.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-2 col-start-2 row-start-5"><Image src={'/images/about/b3.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-3 col-start-3 row-start-1"><Image src={'/images/about/a6.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-3 col-start-3 row-start-4"><Image src={'/images/about/c1.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 col-span-2 row-span-2 col-start-4 row-start-1"><Image src={'/images/about/c5.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-4 col-start-4 row-start-3"><Image src={'/images/about/c3.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-2 col-start-5 row-start-3"><Image src={'/images/about/c4.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
						<div className="transition-all hover:translate-x-0.5 hover:-translate-y-0.5 row-span-2 col-start-5 row-start-5"><Image src={'/images/about/b1.jpg'} width={1000} height={100} alt='Imagen de mosaico' className='w-full h-full object-cover rounded-md'></Image></div>
					</div>

					<div>
						<p className='text-text-color mb-10 text-lg'>
							A medida que avanzamos hacia la actualidad, IVAO Ecuador continúa su evolución constante. La división se esfuerza
							por adaptarse a las necesidades cambiantes de sus miembros y a las últimas tendencias en simulación de vuelo.
							Se enfoca en mejorar la experiencia de simulación, proporcionando herramientas avanzadas y recursos educativos
							que permiten a sus miembros adquirir conocimientos y habilidades fundamentales.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
