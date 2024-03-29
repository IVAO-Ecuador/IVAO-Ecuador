'use client'

import { getUserData } from '@/auth/components/userData';
import { IUser } from '@/auth/types/user';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { BsBell, BsPersonFill } from 'react-icons/bs';
import { redirect } from 'next/navigation';
import Swal from 'sweetalert2'
import Link from 'next/link';

interface Event {
	id_evento: number;
	nombre_evento: string;
	descripcion_evento: string;
	imagen_evento: string;
	fecha_evento: string;
	tipo_evento: string;
	estado: string;
}

interface Flight {
	id_vuelo: number;
	id_evento: number;
	logo_aerolinea: string;
	numero_vuelo: string;
	icao_salida: string;
	icao_llegada: string;
	aeropuerto_salida: string;
	aeropuerto_llegada: string;
	pais_salida: string;
	pais_llegada: string;
	ruta: string;
	hora_salida: string;
	hora_llegada: string;
	spot: string;
	tipo_aeronave: string;
	estado_vuelo: string;
	id_reserva: number | null;
	VID: number | null;
}

export default function Profile() {
	const { status } = useSession();

	const [userData, setUserData] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [eventsList, setEventsList] = useState<Event[]>([]);
	const [isEventLoading, setEventIsLoading] = useState<boolean>(true);
	const isEventInProgress = false;

	const [selectAirport, setSelectAirport] = useState("SEQM")
	const [type, setType] = useState("Departures")
	const [flightsInfo, setFlightsInfo] = useState<Flight[]>([]);

	const [userFlights, setUserFlights] = useState<Flight[]>([]);
	const [isUserFlightsLoading, setUserFlightsLoading] = useState(true);

	const getUserFlights = async (userData: IUser) => {
		fetch('https://api.ec.ivao.aero/ec/api/rfo/checkFlights', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ usuario: userData }),
		})
			.then((response) => response.json())
			.then((data) => {
				setUserFlights(data)
				setUserFlightsLoading(false)
			})
			.catch((error) => {
				console.log(error)
			});
	}

	useEffect(() => {
		const refreshData = async () => {
			const result = await getUserData();
			setUserData(result);
			if (isEventInProgress) getUserFlights(result);
		};

		if (status === 'authenticated' || status === 'loading') {
			refreshData().then(() => {
				setIsLoading(false);
			});
		} else {
			setIsLoading(false);
			redirect('/')
		}
	}, [status]);

	useEffect(() => {
		const fetchData = () => {
			fetch('https://api.ec.ivao.aero/ec/api/rfo')
				.then(response => response.json())
				.then(result => {
					setEventsList(result)
					setEventIsLoading(false);
				})
				.catch(() => {
					console.error('Error al obtener datos de IVAO');
					setEventIsLoading(false);
				});
		};

		if (isEventInProgress) fetchData();

	}, [])

	useEffect(() => {
		async function fetchData() {
			const url = buildUrl(selectAirport, type);
			const response = await fetch(url);
			const result = await response.json();
			setFlightsInfo(result);
		}
		fetchData();
	}, [selectAirport, type]);

	const buildUrl = (selectAirport: string, type: string) => {
		let url = "https://api.ec.ivao.aero/ec/api/rfo/flights";
		url += `?selectAirport=${selectAirport}&type=${type}`;
		return url;
	};

	const handleSelectAirport = (airport: string) => {
		setSelectAirport(airport)
	}

	const handleType = (type: string) => {
		setType(type)
	}

	const calculateDate = (date: string) => {

		const eventInitialDate = new Date(date);

		const months = ['January', 'February', 'March', 'April', 'May',
			'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'
		]

		return `${months[eventInitialDate.getMonth()]}
				${eventInitialDate.getDate()},
		  		${eventInitialDate.getFullYear()}`
	}

	const handleBookFlight = (vuelo: object) => {

		Swal.fire({
			title: 'Do you want to book this flight?',
			text: "You will have to confirm the flight through your email.",
			icon: 'question',
			iconColor: 'hsl(220, 80%, 55%)',
			showCancelButton: true,
			background: '#1D1E2B',
			color: '#d2d3e0bf',
			confirmButtonColor: '#2faf5a',
			cancelButtonColor: 'hsl(1, 62%, 44%)',
			confirmButtonText: 'Book it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch('https://api.ec.ivao.aero/ec/api/rfo/actualizarEstadoVuelo', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ vuelo: vuelo, usuario: userData }),
				})
					.then((response) => response.json())
					.then((data) => {

						Swal.fire({
							icon: 'success',
							title: 'The flight has been booked!',
							text: 'Check your email and confirm your flight. This page will reload!',
							iconColor: 'hsl(220, 80%, 55%)',
							background: '#1D1E2B',
							color: '#d2d3e0bf',
							confirmButtonColor: '#2faf5a',
						})

						setTimeout(() => {
							window.location.href = window.location.href
						}, 5000);

					})
					.catch((error) => {

						Swal.fire({
							icon: 'error',
							title: 'An error has occurred',
							text: 'Try again later or try another flight.',
							iconColor: 'hsl(220, 80%, 55%)',
							background: '#1D1E2B',
							color: '#d2d3e0bf',
							confirmButtonColor: 'hsl(220, 80%, 55%)',
						})
					});
			}
		})
	}

	const handleCancelFlight = (flightID: number) => {

		Swal.fire({
			title: 'Do you want to cancel this flight?',
			text: "It may not be available later.",
			icon: 'question',
			iconColor: 'hsl(220, 80%, 55%)',
			showCancelButton: true,
			background: '#1D1E2B',
			color: '#d2d3e0bf',
			confirmButtonColor: '#2faf5a',
			cancelButtonColor: 'hsl(1, 62%, 44%)',
			confirmButtonText: 'Yes, cancel it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch('https://api.ec.ivao.aero/ec/api/rfo/cancelFlight', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ flightID: flightID }),
				})
					.then((response) => response.json())
					.then((data) => {

						Swal.fire({
							icon: 'success',
							title: 'The flight has been cancel!',
							text: 'This page will reload!',
							iconColor: 'hsl(220, 80%, 55%)',
							background: '#1D1E2B',
							color: '#d2d3e0bf',
							confirmButtonColor: '#2faf5a',
						})

						setTimeout(() => {
							window.location.href = window.location.href
						}, 3000);

					})
					.catch((error) => {

						Swal.fire({
							icon: 'error',
							title: 'An error has occurred',
							text: 'Try again later.',
							iconColor: 'hsl(220, 80%, 55%)',
							background: '#1D1E2B',
							color: '#d2d3e0bf',
							confirmButtonColor: 'hsl(220, 80%, 55%)',
						})
					});
			}
		})
	}

	if (isLoading) {

		return (
			<div className='container py-10'>
				<div className='bg-gray w-full h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
				<div className='flex gap-x-5'>
					<div className='bg-gray w-1/2 h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
					<div className='bg-gray w-1/2 h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
				</div>
				<div className='bg-gray w-full h-96 rounded-xl opacity-20 skeleton-animation mb-5'></div>
			</div>
		)

	} else if (userData) {
		return (
			<div className="overflow-hidden relative">
				<div className="bg-dark-blue relative">
					<div className="bg-[url('/images/training.jpg')] bg-cover bg-no-repeat bg-center h-60 flex items-center">
						<div className="container px-8">
							<div className="text-text-white bg-green px-5 py-1 rounded flex w-fit items-center gap-x-2">
								<BsPersonFill className="text-sm" />
								<p>Profile</p>
							</div>
							<h1 className="text-text-white md:text-6xl text-4xl mt-5 font-extrabold">{`${userData.firstName} ${userData.lastName}`}</h1>
						</div>
					</div>

					<div className="container py-10 px-8">

						<div className='flex w-fit items-center gap-x-3 max-md:gap-x-5 bg-green py-2 max-md:py-5 px-5 rounded-md text-text-white'>
							<BsBell className='xl:text-base md:text-2xl max-md:text-6xl'></BsBell>
							<p>The RFO event has ended! Thank you for participating and being part of our community</p>
						</div>

						{!isEventInProgress ? (
							<div className='mt-10'>
								<div className='border-l-4 border-green p-8 bg-sub-menus text-text-white lg:flex lg:gap-x-10 items-center justify-between'>
									<div>
										<h3 className='font-semibold mb-2'>Report your flights</h3>
										<p className='font-light w-5/6'>Report your flights through the official HQ Events website and get your medal for your participation. Remember to make a report for each flight you have confirmed and flown.</p>
									</div>
									<div className='lg:w-2/6 flex lg:justify-center max-lg:mt-8'>
										<Link href={'https://hqe.ivao.aero/pages/new-report'} target='_blank' className='bg-blue px-16 py-3 rounded text-center'>Report flight</Link>
									</div>
								</div>
							</div>
						) : (
							<div>
								{isEventLoading ? (
									<div>
										<div className='bg-gray w-full h-36 rounded-xl opacity-20 skeleton-animation my-5'></div>
									</div>
								) : (
									<div className='mt-10'>
										{eventsList.map(event => (
											<div key={event.id_evento}>
												<h2 className='text-text-white font-bold text-3xl mb-5'>{event.nombre_evento}</h2>
												<span className='text-text-white bg-blue px-10 py-1 rounded-md'>{calculateDate(event.fecha_evento)}</span>
												<p className='mt-5 text-text-color text-lg'>{event.descripcion_evento} Remember that you can book up to 3 flights for this RFO event.</p>
											</div>
										))}

										<div className='mt-6'>
											{isUserFlightsLoading ? (
												<div>
													<p className='text-text-color'>Loading...</p>
												</div>
											) : (
												<>
													{userFlights.length > 0 && (
														<div>
															<h3 className='text-text-white text-xl mb-5'>Your current flights ({userFlights.length} of 3 possible)</h3>
															{userFlights.map(flight => (
																<div key={flight.id_vuelo} className={`${flight.estado_vuelo == 'RESERVADO' ? 'border-l-yellow' : 'border-l-green'} 
														border-l-4 bg-sub-menus p-8 rounded-sm lg:flex mb-5`}>
																	<div className='lg:w-3/5'>
																		<img src={`/airlines/${flight.logo_aerolinea}.png`} className=' h-10 lg:mx-auto mb-5 lg:hidden' />
																		<p className='text-text-color mb-1'><span className='text-text-white'>Flight number:</span> {flight.numero_vuelo}</p>
																		<p className='text-text-color mb-1'><span className='text-text-white'>Departure Airport:</span> {flight.aeropuerto_salida} - ({flight.icao_salida})</p>
																		<p className='text-text-color mb-1'><span className='text-text-white'>Arrival Airport:</span> {flight.aeropuerto_llegada} - ({flight.icao_llegada})</p>
																		<p className='text-text-color mb-1'><span className='text-text-white'>Departure time:</span> {flight.hora_salida}Z</p>
																		<p className='text-text-color mb-1'><span className='text-text-white'>Arrival time:</span> {flight.hora_llegada}Z</p>
																		<p className='text-text-color mb-1'><span className='text-text-white'>Flight status:</span> {flight.estado_vuelo == 'RESERVADO' ? 'Booked (Check your email to confirm the flight)' : 'Confirmed'}</p>
																	</div>
																	<div className='md:w-2/5 lg:flex justify-end items-center mr-10 max-lg:mt-5'>
																		<div>
																			<img src={`/airlines/${flight.logo_aerolinea}.png`} className=' h-10 mx-auto mb-5 max-lg:hidden' />
																			<button onClick={() => handleCancelFlight(flight.id_vuelo)} className='bg-red text-text-white px-10 py-2 rounded-sm'>Cancel flight</button>
																		</div>
																	</div>

																</div>
															))}
														</div>
													)}
												</>
											)}
										</div>


										<div className='mt-10'>
											<ul className='md:flex block mb-5'>
												<li className={`${selectAirport === "SEQM" ? "bg-pink" : "bg-sub-menus"} md:w-1/2 w-full py-4 font-normal md:rounded-l-md md:rounded-r-none rounded-md md:mb-0 mb-3 max-md:px-5 cursor-pointer text-center text-text-white`}
													onClick={() => handleSelectAirport("SEQM")}>
													SEQM - Mariscal Sucre Intl.
												</li>
												<li className={`${selectAirport === "SEGU" ? "bg-pink" : "bg-sub-menus"} md:w-1/2 w-full py-4 font-normal md:rounded-r-md md:rounded-l-none rounded-md md:mb-0 mb-3 max-md:px-5 cursor-pointer text-center text-text-white`}
													onClick={() => handleSelectAirport("SEGU")}>
													SEGU - José Joaquín de Olmedo Intl.
												</li>
											</ul>
											<div>
												<ul className="flex">
													<li className={`${type === "Departures" ? "active_section" : "deactived_section"} md:w-1/2 w-full py-4 cursor-pointer text-text-white flex items-center justify-center gap-3`}
														onClick={() => { handleType("Departures") }}>
														<i className="bi bi-arrow-up-right-square-fill"></i>
														<p>Departures</p>
													</li>
													<li className={`${type === "Arrivals" ? "active_section" : "deactived_section"} md:w-1/2 w-full py-4 cursor-pointer text-text-white flex items-center justify-center gap-3`}
														onClick={() => { handleType("Arrivals") }}>
														<i className="bi bi-arrow-down-right-square-fill"></i>
														<p>Arrivals</p>
													</li>
												</ul>
											</div>
											<div className='mt-10'>

												<div className="xl:flex xl:flex-col gap-x-5">
													<div className='lg:flex gap-x-10 justify-center items-center bg-pink px-10 py-5 rounded-md text-text-white mb-5 hidden'>
														<span className="w-1/12 text-center">Flight</span>
														<span className="w-4/12 text-center">
															{type == 'Departures' ? ('Destination Airport') : ('Departure Airport')}
														</span>
														<span className="w-1/12 text-center">Depart time</span>
														<span className="w-1/12 text-center">Arrival time</span>
														<span className="w-1/12 text-center">Aircraft</span>
														<span className="w-2/12 text-center">Status</span>
													</div>
													{flightsInfo.map((flight) => (
														<div key={flight.id_vuelo}>
															<div className='lg:flex lg:w-full w-full gap-x-10 md:justify-between bg-hover-color md:px-10 py-7 px-5 rounded-md text-text-color lg:mb-3 mb-6 items-center'>
																<span className="lg:w-1/12 w-full flex lg:items-center lg:mb-0 mb-8 justify-start">
																	<img src={`/airlines/${flight.logo_aerolinea}.png`} className=' w-1/2 lg:h-6 opacity-70 lg:hidden' />
																	<p className='bg-bg-dark-blue rounded-md py-2 w-full text-center'>{flight.numero_vuelo}</p>
																</span>

																<p className='lg:hidden mb-4 font-medium'>{type == 'Departures' ? ('Flight destination: ') : ('Flight departure: ')}</p>
																<span className="lg:w-4/12 w-full flex lg:justify-start justify-start items-center max-lg:bg-bg-dark-blue max-lg:p-5 max-lg:rounded-md max-lg:mb-5 max-lg:h-[120px]">

																	{type == 'Departures' ? (
																		<>
																			<img className='h-7 rounded-[3px] lg:mr-6 mr-4' src={`https://flagcdn.com/w40/${flight.pais_llegada.toLowerCase()}.png`} />
																			<p className='text-left'>{flight.icao_llegada} - {flight.aeropuerto_llegada}</p>
																		</>
																	) : (
																		<>
																			<img className='h-7 rounded-[3px] lg:mr-6 mr-4' src={`https://flagcdn.com/w40/${flight.pais_salida.toLowerCase()}.png`} />
																			<p className='text-left'>{flight.icao_salida} - {flight.aeropuerto_llegada}</p>
																		</>
																	)}

																</span>
																<p className="lg:w-1/12 w-full lg:text-center max-lg:mb-4"><span className='lg:hidden font-medium'>Departure time: </span><span className='max-lg:py-1 max-lg:p-3 max-lg:bg-bg-dark-blue max-lg:rounded-md max-lg:float-right'>{flight.hora_salida}z</span></p>
																<p className="lg:w-1/12 w-full lg:text-center max-lg:mb-4"><span className='lg:hidden font-medium'>Arrival time: </span><span className='max-lg:py-1 max-lg:p-3 max-lg:bg-bg-dark-blue max-lg:rounded-md max-lg:float-right'>{flight.hora_llegada}z</span></p>
																<p className="lg:w-1/12 w-full lg:text-center max-lg:mb-4"><span className='lg:hidden font-medium'>Aircraft: </span><span className='max-lg:py-1 max-lg:p-3 max-lg:bg-bg-dark-blue max-lg:rounded-md max-lg:float-right'>{flight.tipo_aeronave}</span></p>
																<div className="lg:w-2/12 w-full lg:text-center max-lg:mt-10 text-center">
																	<div>
																		{(flight.estado_vuelo === 'LIBRE' && userFlights.length < 3) ?
																			<button onClick={() => handleBookFlight(flight)} className='block w-full bg-main-green text-text-white p-3 rounded-md'>Available</button> :
																			flight.estado_vuelo === 'RESERVADO' ?
																				<div className='w-full bg-yellow p-3 rounded-md text-text-white'>Waiting for confirmation</div> :
																				flight.estado_vuelo === 'CONFIRMADO' ?
																					<div className='w-full bg-red p-3 rounded-md text-text-white'>Booked (<span className='font-normal '>{flight.VID}</span>)</div> :
																					<div className=' w-full bg-dark-blue text-text-white p-3 rounded-md'>You can't book more flights</div>}
																	</div>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}