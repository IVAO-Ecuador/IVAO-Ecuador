
import CtaIVAO from '@/components/navigation/CtaIVAO'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight, BsHeartFill, BsLamp } from 'react-icons/bs'

export default function About() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='flex items-center gap-x-3'>
							<div className='text-text-white bg-main-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
								<BsHeartFill className='text-sm'></BsHeartFill>
								<p>Historia</p>
							</div>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Sobre IVAO Ecuador</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<div>
						<h2 className='text-text-white font-bold text-3xl mb-10'>La historia de IVAO Ecuador</h2>
						<div className='xl:flex gap-x-5 mb-10'>
							<div className='xl:w-1/2'>
								<p className='text-text-color mb-10 text-lg'>
									IVAO Ecuador es la división ecuatoriana de IVAO (International Virtual Aviation Organization), una red global
									de simulación de vuelo en línea que ha cautivado a entusiastas de la aviación en todo el mundo. IVAO Ecuador
									se dedica a brindar una experiencia realista y educativa a sus miembros, promoviendo la simulación de vuelo
									y el control de tráfico aéreo en un entorno virtual. Acompáñanos en este recorrido por su fascinante trayectoria.
								</p>

								<p className='text-text-color text-lg'>
									IVAO Ecuador estuvo inactivo durante varios años hasta 2020. Desde 2013, se intentó reactivar la división sin éxito,
									ya que las personas interesadas en formar parte del equipo de administración no cumplían con los requisitos de
									rango necesarios. Sin embargo, se recibió apoyo y asesoría de miembros del equipo de IVAO Argentina e IVAO Chile.
									Finalmente, en junio de 2020, se logró reabrir la mini división de IVAO Ecuador con un equipo comprometido que
									trabaja arduamente para mejorar la división y presentar nuevos proyectos. Su objetivo es innovar y equipararse
									con las divisiones europeas.
								</p>
							</div>
							<div className='xl:w-1/2 max-xl:hidden flex justify-center items-center'>
								<img src="/images/about/c5.jpg" alt="Imagen sobre la división de IVAO Ecuador" className='w-5/6 h-5/6 object-cover rounded-2xl brightness-50' />
							</div>
						</div>

						<p className='text-text-color mb-10 text-lg'>
							Con los años se han llevado a cabo esfuerzos significativos para fortalecer la estructura interna de la división.
							Se han establecido procesos de reclutamiento más rigurosos para el equipo de administración, lo que
							ha permitido contar con miembros altamente capacitados y comprometidos en roles clave. Esto ha
							generado una gestión más eficiente y una mayor calidad en los servicios ofrecidos.
						</p>

						<p className='text-text-color mb-10 text-lg'>
							Además, IVAO Ecuador ha puesto un fuerte énfasis en la formación y capacitación de sus miembros. Se han establecido
							programas de entrenamiento internos para pilotos virtuales y controladores aéreos virtuales, con el objetivo de
							mejorar sus habilidades y conocimientos. Asimismo, se han promovido actividades de aprendizaje en colaboración
							con otras divisiones y se han llevado a cabo eventos especiales de formación para fomentar el crecimiento profesional
							de los participantes.
						</p>

						<img src="/images/about/c4.jpg" alt="Imagen sobre la división de IVAO Ecuador" className='w-full h-72 object-cover rounded-xl brightness-50' />

						<p className='text-text-color mb-10 mt-10 text-lg'>
							En términos de participación y eventos, IVAO Ecuador ha experimentado un incremento significativo. Se han organizado
							vuelos grupales, eventos temáticos y competencias, lo que ha brindado a los miembros la oportunidad de interactuar,
							compartir experiencias y fortalecer los lazos de comunidad. Estas actividades han sido diseñadas para adaptarse a
							las necesidades e intereses de los pilotos virtuales y controladores aéreos virtuales en Ecuador, ofreciendo una
							experiencia de simulación de vuelo enriquecedora y realista.
						</p>

						<CtaIVAO></CtaIVAO>
						
					</div>
				</div>
			</div>
		</div>
	)
}
