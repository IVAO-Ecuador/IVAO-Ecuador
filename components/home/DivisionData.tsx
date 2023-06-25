import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

interface Pilot {
	id: number;
	userId: number;
	callsign: string;
	lastTrack: {
		state: string;
	}
	flightPlan: {
		departureId: string;
		arrivalId: string;
		aircraftId: string;
	};
}

interface ATC {
	id: number;
	callsign: string;
	createdAt: string;
	lastTrack: {
		latitude: number;
		longitude: number;
	};
	atcSession: {
		position: string;
	};
}

type FlightType = 'departure' | 'arrival';

export default function DivisionData() {
	const [pilotsInfo, setPilotsInfo] = useState<Pilot[]>([]);
	const [controllersInfo, setControllersInfo] = useState<ATC[]>([]);
	const [selectedFlightType, setSelectedFlightType] = useState<FlightType>('departure');
	const [isLoading, setIsLoading] = useState(true); // Variable de estado para controlar el estado de carga

	const airportsArray: string[] = [
		'SEQM', 'SEGU', 'SEMT', 'SEST', 'SEGS',
		'SECU', 'SERO', 'SELT', 'SENL', 'SECO', 'SESM', 'SEMC',
		'SEJD', 'SETN', 'SETU', 'SESA', 'SECA', 'SKBO'
	];

	useEffect(() => {
		const fetchData = () => {
			fetch('https://api.ivao.aero/v2/tracker/whazzup')
				.then(response => response.json())
				.then(page => {
					console.log("Actualizado")
					setPilotsInfo(page.clients.pilots);
					setControllersInfo(page.clients.atcs.filter((atc: ATC) => airportsArray.some(icao => atc.callsign.startsWith(icao))));
					setIsLoading(false);
				})
				.catch(() => {
					console.error('Error al obtener datos de IVAO');
					setIsLoading(false);
				});
		};

		// Fetch data initially
		fetchData();

		// Fetch data every 20 seconds
		const interval = setInterval(fetchData, 20000);

		// Clean up interval on component unmount
		return () => clearInterval(interval);
	}, []);

	const filterFlights = (type: FlightType): Pilot[] => {
		const filteredFlights = pilotsInfo.filter(pilot => {
			if (type === 'departure') {
				return pilot.flightPlan && pilot.flightPlan.departureId && airportsArray.includes(pilot.flightPlan.departureId);
			} else if (type === 'arrival') {
				return pilot.flightPlan && pilot.flightPlan.arrivalId && airportsArray.includes(pilot.flightPlan.arrivalId);
			}
			return false;
		});

		return filteredFlights;
	};

	const flightStatus = (status:string) => {
		switch(status){
			case 'On Blocks': return 'Aparcado';
			case 'En Route': return 'Crucero';
			case 'Approach': return 'Aproximación';
			case 'Initial Climb': return 'En ascenso';
			case 'Landed': return 'Aterrizó';
			case 'Boarding': return 'Abordando';
			case 'Departing': return 'Despegando';
		}
	}

	const handleFlightTypeChange = (type: FlightType) => {
		setSelectedFlightType(type);
	};

	const filteredFlights = filterFlights(selectedFlightType);

	return (
		<div className='lg:-mt-14 -mt-24 py-28'>
			<p className="text-2xl font-bold mb-2 text-pink-500 text-center">¡Estás en el radar!</p>
			<h2 className="text-4xl font-bold text-text-white text-center">Usuarios activos en Ecuador</h2>
			<hr className="w-40 mx-auto my-6 border-pink-500"></hr>
			<p className="text-lg max-w-4xl mx-auto text-text-color text-center">A continuación te presentamos la información sobre nuestros pilotos y controladores activos en Ecuador.</p>

			<div className="flex justify-center my-8">
				<button
					className={`mx-4 px-6 py-2 font-semibold flex justify-center items-center gap-x-2 rounded-full ${selectedFlightType === 'departure' ? 'bg-pink-500 text-text-white pink-blur' : 'bg-transparent text-pink-500 border opacity-50'
						}`}
					onClick={() => handleFlightTypeChange('departure')}
				>
					<p>Salidas</p>
					<FaPlaneDeparture></FaPlaneDeparture>
				</button>
				<button
					className={`mx-4 px-6 py-2 font-semibold flex justify-center items-center gap-x-2 rounded-full ${selectedFlightType === 'arrival' ? 'bg-pink-500 text-text-white pink-blur' : 'bg-transparent text-pink-500 border opacity-50'
						}`}
					onClick={() => handleFlightTypeChange('arrival')}
				>
					<p>Llegadas</p>
					<FaPlaneArrival></FaPlaneArrival>
				</button>
			</div>

			{isLoading ? (
				<p className="text-lg max-w-4xl mx-auto text-text-color text-center">Cargando los vuelos...</p>
			) : (
				<div>
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
									Callsign
								</th>
								<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
									Origen
								</th>
								<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
									Llegada
								</th>
								<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
									Aeronave
								</th>
								<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
									Estado
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{filteredFlights.slice(0, 7).map(pilot => (
								<tr key={pilot.id} className='text-center'>
									<td className="px-6 py-4 whitespace-nowrap">
										<h5 className="text-text-color font-bold">{pilot.callsign}</h5>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<h5 className="text-text-color font-bold">{pilot.flightPlan.departureId}</h5>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<h5 className="text-text-color font-bold">{pilot.flightPlan.arrivalId}</h5>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<h5 className="text-text-color font-bold">{pilot.flightPlan.aircraftId}</h5>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<h5 className="text-text-color font-bold">{flightStatus(pilot.lastTrack.state)}</h5>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{filteredFlights.length > 7 && (
						<Link href={"#"} className="text-pink-500 font-bold">
							Más vuelos
						</Link>
					)}
				</div>
			)}

			<div className='hidden'>
				<h2>ATC at Ecuador Airports</h2>
				<ul>
					{controllersInfo.map(atc => (
						<li key={atc.id}>{atc.callsign}</li>
					))}
				</ul>
			</div>
		</div>
	);
}