
import React from 'react'
import { BsHeadset, BsPcDisplay, BsRocketFill, BsSignpost2Fill } from 'react-icons/bs'
import { LuTowerControl } from 'react-icons/lu'

export default function AtcOperation() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/atc-operations.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<LuTowerControl className='text-sm'></LuTowerControl>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Operaciones ATC</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						Como controlador de tráfico aéreo, tendrás la oportunidad de gestionar el tráfico en el espacio aéreo
						de Ecuador y garantizar la seguridad y eficiencia de los vuelos virtuales.
					</p>

					<p className='text-text-color text-lg mb-8'>
						En la guía de operaciones ATC, encontrarás detalles sobre el espacio aéreo de Ecuador, incluyendo las
						clases de espacio aéreo y las particularidades de cada una. También se proporcionarán directrices
						sobre los niveles de vuelo utilizados en el país y cómo aplicar la separación radar adecuada entre las aeronaves.
						Además, las guías incluyen procedimientos especiales para el Área de Control Terminal (TMA) de Quito,
						que es una de las áreas de mayor actividad en Ecuador. Estos procedimientos detallan cómo manejar
						el tráfico entrante y saliente de la terminal de Quito, así como las rutas preferidas, SID
						(Procedimientos de Salida), STAR (Procedimientos de Llegada) y procedimientos de aproximación
						de cada aeropuerto en Ecuador.
					</p>

					<p className='text-text-color text-lg mb-8'>
						Asimismo, las guías cubren aspectos esenciales como las comunicaciones, información de aeródromos
						y ayudas a la navegación (navaids). Estos recursos te proporcionarán los datos necesarios para
						establecer una comunicación efectiva con los pilotos y para utilizar las ayudas a la navegación
						disponibles en el espacio aéreo ecuatoriano.
					</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-blue rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsSignpost2Fill className='text-4xl text-text-white'></BsSignpost2Fill>
							</div>
							<div className='w-full'>
								<h3 className='text-text-white max-md:mb-3'>Manual de operaciones ATC (QuickView for ATC)</h3>
								<p className='text-text-color'>Accede al manual de operaciones para controladores en Ecuador.</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							<button className='bg-gray-200 text-text-white px-20 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>Abrir documento</button>
						</div>
					</div>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-pink rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsHeadset className='text-4xl text-text-white'></BsHeadset>
							</div>
							<div className='w-full'>
								<h3 className='text-text-white max-md:mb-3'>Manual de comunicaciones ATC en Ecuador</h3>
								<p className='text-text-color'>Accede al manual de comunicaciones para controladores.</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							<button className='bg-gray-200 text-text-white px-20 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>Abrir documento</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
