'use client'

import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Swal from 'sweetalert2'

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

export default function ConfirmFlight({ params }: any) {

	const [flight, setFlight] = useState<Flight[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { id } = params;

	useEffect(() => {

		fetch('https://api.ec.ivao.aero/ec/api/rfo/verifyFlight', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: id }),
		})
			.then((response) => response.json())
			.then((data) => {
				setFlight(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.log(error)
			});
	}, [id])

	const confirmFlight = () => {
		fetch('https://api.ec.ivao.aero/ec/api/rfo/confirmFlight', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: flight[0].id_vuelo }),
		})
			.then((response) => response.json())
			.then((data) => {

				Swal.fire({
					icon: 'success',
					title: 'Flight confirmed!',
					text: `Thank you for your participation in our RFO! You'll be redirected to our homepage`,
					iconColor: 'hsl(220, 80%, 55%)',
					background: '#1D1E2B',
					color: '#d2d3e0bf',
					confirmButtonColor: '#2faf5a',
				})

				setTimeout(() => {
					window.location.href = '/'
				}, 3000);
			})
			.catch((error) => {
				console.log(error)
			});
	}


	if (isLoading) {

		return (
			<div className='container py-10'>
				<div className='bg-gray w-full h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
				<div className='bg-gray w-full h-96 rounded-xl opacity-20 skeleton-animation mb-5'></div>
			</div>
		)

	} else if (flight.length != 0) {
		return (
			flight.map(flight => {

				if (flight.estado_vuelo == 'CONFIRMADO') {
					return (
						<div className='container py-20' key={flight.id_vuelo}>
							<h1 className='text-text-white text-center text-4xl font-semibold'>This flight has already been confirmed</h1>
							<p className=' text-center text-text-color text-lg mt-5'>This flight has already been confirmed by {flight.VID}.
								If you think it is an error, contact a staff through the discord to resolve your request.
							</p>
						</div>
					)
				} else {
					return (
						<div className='container py-20' key={flight.id_vuelo}>
							<h1 className='text-text-white text-center text-4xl font-semibold'>Confirm your flight now!</h1>
							<p className=' text-center text-text-color text-lg mt-5'>The flight {flight.numero_vuelo} you have booked is ready to be confirmed. Remember that you can cancel
								this flight and book a new one. We thank you for your interest in booking a flight for our RFO event.
								Click the button below to confirm your flight
							</p>
							<div className='mt-10 flex'>
								<div className='w-full px-10 bg-hover-color h-36 rounded-lg flex'>
									<div className='w-1/6 flex justify-center items-center'>
										<img src={`/airlines/${flight.logo_aerolinea}.png`} className='lg:h-7 opacity-70' />
									</div>
									<div className='w-4/6 flex justify-center items-center'>
										<div className='text-center px-10'>
											<p className='text-text-white'>{flight.icao_salida}</p>
											<p className='text-text-color'>{flight.aeropuerto_salida}</p>
										</div>
										<div className='text-text-white'>
											<BsArrowRight></BsArrowRight>
										</div>
										<div className='text-center px-10'>
											<p className='text-text-white'>{flight.icao_llegada}</p>
											<p className='text-text-color'>{flight.aeropuerto_llegada}</p>
										</div>
									</div>
									<div className='w-1/6 flex justify-center items-center'>
										<div>
											<p className='text-text-white text-center'>Aircraft</p>
											<p className='text-text-color text-center'>{flight.tipo_aeronave}</p>
										</div>
									</div>
								</div>
							</div>
							<button onClick={confirmFlight} className='mt-10 mx-auto px-10 py-3 bg-main-purple rounded-md text-text-white block hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>Confirm the flight {flight.numero_vuelo}</button>
						</div>
					)
				}
			})
		)
	} else {
		return (
			<div className='container py-20'>
				<h1 className='text-text-white text-center text-4xl font-semibold'>An error has occurred</h1>
				<p className=' text-center text-text-color text-lg mt-5'>The flight you are trying to confirm
					has not been previously booked. Go to your profile and book an available flight. An email will
					be sent to you with the confirmation link.
				</p>
			</div>
		)
	}
}