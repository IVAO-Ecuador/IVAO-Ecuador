import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsFillCalendarDateFill } from 'react-icons/bs'

interface Event {
	id_evento: number;
	nombre_evento: string;
	descripcion_evento: string;
	imagen_evento: string;
	fecha_evento: string;
	tipo_evento: string;
	estado: string;
}

export default function LatestEvents() {
	const [eventsList, setEventsList] = useState<Event[]>([])
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
		<div className='py-48'>
			<div className='-mt-14 mb-8'>
				<div className="flex pink-blur items-center justify-center mx-auto rounded-full text-4xl w-[72px] h-[72px] info-number-green text-green bg-[#15231D]">
					<BsFillCalendarDateFill></BsFillCalendarDateFill>
				</div>
			</div>

			<p className="text-2xl font-bold mb-2 text-green text-center">¡Autorizado a despegar!</p>
			<h2 className="text-4xl font-bold text-text-white text-center">Eventos en nuestros cielos </h2>
			<hr className="w-40 mx-auto my-6 border-green"></hr>
			<p className="text-lg max-w-4xl mx-auto text-text-color text-center mb-10">Únete a nuestros eventos, disfruta de volar y controlar y gana medallas</p>

			{isLoading ? (
				<p className="text-lg max-w-4xl mx-auto text-text-color text-center">Cargando información...</p>
			) : (
				<div>
					<div className='lg:flex gap-x-6 mb-10'>
						{eventsList.map(event => (
							<div key={event.id_evento} className='bg-hover-color lg:w-1/3 cursor-pointer rounded-xl events-card-shadow event-border max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
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
					<div className='flex justify-center'>
						<Link href={'/events'} className='text-green font-bold border px-8 py-1 rounded-md hover:px-10 transition-all'>Ver todos los eventos</Link>
					</div>
				</div>

			)}
		</div>
	)
}
