'use client'

import CtaIVAO from '@/components/navigation/CtaIVAO'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsTelephoneForward } from 'react-icons/bs'
import { LuTowerControl } from 'react-icons/lu'

interface Event {
	id_evento: number;
	nombre_evento: string;
	descripcion_evento: string;
	imagen_evento: string;
	fecha_evento: string;
	tipo_evento: string;
	estado: string;
}

export default function AtcOperation() {

	const [eventsList, setEventsList] = useState<Event[]>([])
	const [emailCopy, setEmailCopy] = useState(false)
	const [isLoading, setIsLoading] = useState(true);



	useEffect(() => {
		const fetchData = () => {
			fetch('http://localhost:3005/api/events')
				.then(response => response.json())
				.then(page => {
					setEventsList(page)
					setIsLoading(false);
				})
				.catch(() => {
					console.error('Error al obtener datos de IVAO');
					setIsLoading(false);
				});
		};
		fetchData();
	}, [])

	const copyToClipboard = () => {
		const emailElement = document.getElementById('email');
		{/*@ts-ignore*/ }
		const emailText = emailElement.innerText;

		if (emailText !== 'Correo copiado') {
			navigator.clipboard.writeText(emailText)
			{/*@ts-ignore*/ }
			emailElement.innerHTML = "Correo copiado"
			setEmailCopy(true)
		}
	};

	const calculateDate = (date: string) => {

		const eventInitialDate = new Date(date);

		const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
			'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
		]

		return `${eventInitialDate.getDate()} de
		 		${months[eventInitialDate.getMonth()]} de
		  		${eventInitialDate.getFullYear()}`
	}

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/events.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<LuTowerControl className='text-sm'></LuTowerControl>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Eventos</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<p className='text-text-color text-lg mb-8'>
						A continuación encontrarás nuestros proximos eventos. Revisa su categoria y participa para obtener puntos y
						medallas. No olvides de reportar tu asistencia a través del siguiente enlace:
						<Link href={'https://tours.th.ivao.aero/index.php?div=EC'} className='text-green'> IVAO Ecuador Tour System.</Link>
					</p>

					{isLoading ? (
						<p className="text-lg max-w-4xl mx-auto text-text-color text-center">Cargando información...</p>
					) : (
						<div>
							<div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-5  mb-10'>
								{eventsList.map(event => (
									<div key={event.id_evento} className='bg-hover-color cursor-pointer rounded-xl events-card-shadow event-border max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
										<img src={event.imagen_evento} className='w-[700px] h-[80px] xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg' />
										<div className='p-7'>
											<div className='xl:flex gap-x-3 items-center'>
												<h3 className='text-text-white text-xl font-semibold'>{event.nombre_evento}</h3>
												<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>{event.tipo_evento}</span>
											</div>
											<p className='mt-5 text-text-color mb-5'>{event.descripcion_evento}</p>
											<p className='text-text-white'>Fecha: {calculateDate(event.fecha_evento)}</p>
										</div>
									</div>
								))}
							</div>

							<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
								<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
									<div className='bg-green rounded-full p-3 w-min mx-auto max-xl:mb-5'>
										<BsTelephoneForward className='text-4xl text-text-white'></BsTelephoneForward>
									</div>
									<div className='w-full'>
										<h3 className='text-text-white max-md:mb-3'>¿Tienes ideas sobre algun evento?</h3>
										<p className='text-text-color'>Comunicate con nosotros a través del correo para leer sobre tu idea.</p>
									</div>
								</div>

								<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
									<p id="email" className={`${emailCopy ? 'bg-main-green' : 'bg-gray-200 hover:bg-gray'} text-text-white text-center px-20 py-2 rounded-md max-md:w-full max-md:mb-2 transition-all`} onClick={copyToClipboard}>ec-ec@ivao.aero</p>
								</div>
							</div>
						</div>

					)}

					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
