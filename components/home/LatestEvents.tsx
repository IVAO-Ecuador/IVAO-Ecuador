import { useGlobalContext } from '@/app/context/transalation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { translations } from '../translation/translations';

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
	const { selectedLanguage } = useGlobalContext();

	useEffect(() => {
		const fetchData = () => {
			fetch('https://api.ec.ivao.aero/ec/api/events')
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
		<div className='-mt-28 py-48'>
			<div className='-mt-14 mb-8'>
				<div className="flex pink-blur items-center justify-center mx-auto rounded-full text-4xl w-[72px] h-[72px] info-number-green text-green bg-[#15231D]">
					<BsFillCalendarDateFill></BsFillCalendarDateFill>
				</div>
			</div>

			{/*@ts-ignore*/}
			<p className="text-2xl font-bold mb-2 text-green text-center">{translations[selectedLanguage]?.home_second_label}</p>
			{/*@ts-ignore*/}
			<h2 className="text-4xl font-bold text-text-white text-center">{translations[selectedLanguage]?.home_LatestEvents_title}</h2>
			<hr className="w-40 mx-auto my-6 border-green"></hr>
			{/*@ts-ignore*/}
			<p className="text-lg max-w-4xl mx-auto text-text-color text-center mb-10">{translations[selectedLanguage]?.home_LatestEvents_description}</p>

			{isLoading ? (
				<p className="text-lg max-w-4xl mx-auto text-text-color text-center">
					{/*@ts-ignore*/}
					{translations[selectedLanguage]?.home_LatestEvents_loading}
				</p>
			) : (
				<div>
					{eventsList.length != undefined && (
						<>
							<div className='lg:flex gap-x-6 mb-10'>
								{eventsList.slice(0, 3).map(event => (
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
								{/*@ts-ignore*/}
								<Link href={'/events'} className='text-green font-bold border px-8 py-1 rounded-md hover:px-10 transition-all'>{translations[selectedLanguage]?.home_LatestEvents_see_all}</Link>
							</div>
						</>
					)}
				</div>

			)}
		</div>
	)
}
