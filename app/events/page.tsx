'use client'

import CtaIVAO from '@/components/navigation/CtaIVAO'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsLightningFill, BsTelephoneForward } from 'react-icons/bs'
import { useGlobalContext } from '../context/transalation'
import { translations } from '@/components/translation/translations'

interface Event {
	id_evento: number;
	nombre_evento: string;
	descripcion_evento: string;
	imagen_evento: string;
	fecha_evento: string;
	tipo_evento: string;
	estado: string;
}

export default function Events() {

	const [eventsList, setEventsList] = useState<Event[]>([])
	const [emailCopy, setEmailCopy] = useState(false)
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

	const copyToClipboard = () => {
		const emailElement = document.getElementById('email');
		{/*@ts-ignore*/ }
		const emailText = emailElement.innerText;

		if (emailText !== 'Correo copiado') {
			navigator.clipboard.writeText(emailText)
			{/*@ts-ignore*/ }
			emailElement.innerHTML = translations[selectedLanguage]?.email_copied
			setEmailCopy(true)
		}
	};

	const calculateDate = (date: string) => {

		const eventInitialDate = new Date(date);

		const monthsSpanish = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
			'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
		]

		const monthsEnglish = ['January', 'February', 'March', 'April', 'May',
			'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'
		]

		if (selectedLanguage == 'English') {
			return `${monthsEnglish[eventInitialDate.getMonth()]}
			${eventInitialDate.getDate()},
			  ${eventInitialDate.getFullYear()}`
		} else {
			return `${eventInitialDate.getDate()} de
		 		${monthsSpanish[eventInitialDate.getMonth()]} de
		  		${eventInitialDate.getFullYear()}`
		}

	}

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/events.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsLightningFill className='text-sm'></BsLightningFill>
							{/*@ts-ignore*/}
							<p>{translations[selectedLanguage]?.event_category}</p>
						</div>
						{/*@ts-ignore*/}
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>{translations[selectedLanguage]?.event_title}</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'> {translations[selectedLanguage]?.event_description}
						<Link href={'https://tours.th.ivao.aero/index.php?div=EC'} className='text-green'> IVAO Ecuador Tour System.</Link>
					</p>

					{isLoading ? (
						<>
							{/*@ts-ignore*/}
							<p className="text-lg max-w-4xl mx-auto text-text-color text-center">{translations[selectedLanguage]?.event_loading}</p>
						</>

					) : (
						<div>
							<div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-5  mb-10'>
								{eventsList.map(event => (
									<div key={event.id_evento} className='bg-hover-color cursor-pointer rounded-xl events-card-shadow event-border max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
										<img src={event.imagen_evento} className='w-[700px] h-[80px] xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg' />
										<div className='p-7'>
											<div>
												<h3 className='text-text-white text-xl font-semibold mb-2'>{event.nombre_evento}</h3>
												<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>{event.tipo_evento}</span>
											</div>
											<p className='mt-2 text-text-color mb-5'>{event.descripcion_evento}</p>
											{/*@ts-ignore*/}
											<p className='text-text-white'>{translations[selectedLanguage]?.event_date} {calculateDate(event.fecha_evento)}</p>
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
										{/*@ts-ignore*/}
										<h3 className='text-text-white max-md:mb-3'>{translations[selectedLanguage]?.event_idea}</h3>
										{/*@ts-ignore*/}
										<p className='text-text-color'>{translations[selectedLanguage]?.event_idea_text}</p>
									</div>
								</div>

								<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
									<p id="email" className={`${emailCopy ? 'bg-main-green' : 'bg-gray-200 hover:bg-gray'} text-text-white text-center px-20 py-2 rounded-md max-md:w-full max-md:mb-2 transition-all`} onClick={copyToClipboard}>ec-events@ivao.aero</p>
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
