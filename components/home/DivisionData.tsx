import React, { useEffect, useState } from 'react';
import { BsFillAirplaneFill } from 'react-icons/bs';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { LuTowerControl } from 'react-icons/lu';
import CtaIVAO from '../navigation/CtaIVAO';
import { useGlobalContext } from '@/app/context/transalation';
import { translations } from '../translation/translations';

interface Pilot {
	id: number;
	userId: number;
	callsign: string;
	lastTrack: {
		state: string;
	};
	flightPlan: {
		departureId: string;
		arrivalId: string;
		aircraftId: string;
	};
}

interface ATC {
	id: number;
	userId: number;
	callsign: string;
	time: number;
	atcSession: {
		position: string;
		frequency: number;
	};
}

type FlightType = 'departure' | 'arrival' | 'none';

export default function DivisionData() {
	const [pilotsInfo, setPilotsInfo] = useState<Pilot[]>([]);
	const [controllersInfo, setControllersInfo] = useState<ATC[]>([]);
	const [selectedFlightType, setSelectedFlightType] = useState<FlightType>('departure');
	const [showControllerList, setShowControllerList] = useState(false);
	const [infoToShow, setInfoToShow] = useState(7)
	const [isLoading, setIsLoading] = useState(true);
	const { selectedLanguage } = useGlobalContext();

	const airportsArray: string[] = [
		'SEQM', 'SEGU', 'SEMT', 'SEST', 'SEGS',
		'SECU', 'SERO', 'SELT', 'SENL', 'SECO', 'SESM', 'SEMC',
		'SEJD', 'SETN', 'SETU', 'SESA', 'SECA'
	];

	useEffect(() => {
		const fetchData = () => {
			fetch('https://api.ivao.aero/v2/tracker/whazzup')
				.then(response => response.json())
				.then(page => {
					setPilotsInfo(page.clients.pilots);
					setControllersInfo(page.clients.atcs.filter((atc: ATC) => airportsArray.some(icao => atc.callsign.startsWith(icao))));
					setIsLoading(false);

					if (filterFlights('departure').length != 0) {
						setSelectedFlightType('departure')
						setShowControllerList(false)
					} else if (filterFlights('arrival').length != 0) {
						setSelectedFlightType('arrival')
						setShowControllerList(false)
					}
				})
				.catch(() => {
					console.error('Error al obtener datos de IVAO');
					setIsLoading(false);
				});
		};

		fetchData();



		const interval = setInterval(fetchData, 20000);
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


	const flightStatus = (status: string) => {
		switch (status) {
			case 'On Blocks':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_on_blocks;
			}
				
			case 'En Route':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_en_route;
			}
				
			case 'Approach':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_approach;
			}
				
			case 'Initial Climb':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_initial_climb;
			}
				
			case 'Landed':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_landed;
			}
				
			case 'Boarding':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_boarding;
			}
				
			case 'Departing':{
				{/*@ts-ignore*/}
				return translations[selectedLanguage]?.home_DivisionData_departing;
			}
				
		}
	};

	const handleFlightTypeChange = (type: FlightType) => {
		setSelectedFlightType(type);
		setShowControllerList(false);
	};

	const handleControllerList = () => {
		setShowControllerList(true);
		setSelectedFlightType('none')
	};

	const handleInfoToShow = () => {
		infoToShow == 7 ? setInfoToShow(500) : setInfoToShow(7)
	}

	const filteredFlights = filterFlights(selectedFlightType);

	return (
		<div className='py-16 -mt-28'>

			<div className='mt-10 mb-10'>
				<div className="flex pink-blur items-center justify-center mx-auto rounded-full text-4xl w-[72px] h-[72px] info-number-pink text-pink-500 bg-[#291839]">
					<BsFillAirplaneFill className='rotate-180'></BsFillAirplaneFill>
				</div>
			</div>
			{/*@ts-ignore*/}
			<p className="text-2xl font-bold mb-2 text-pink-500 text-center">{translations[selectedLanguage]?.home_third_label}</p>
			{/*@ts-ignore*/}
			<h2 className="text-4xl font-bold text-text-white text-center">{translations[selectedLanguage]?.home_DivisionData_title}</h2>
			<hr className="w-40 mx-auto my-6 border-pink-500"></hr>
			{/*@ts-ignore*/}
			<p className="text-lg max-w-4xl mx-auto text-text-color text-center">{translations[selectedLanguage]?.home_DivisionData_description}</p>

			<div className="flex justify-center my-8 max-md:flex-wrap">
				{filterFlights('departure').length !== 0 && (
					<button
						className={`mx-4 max-md:mb-3 max-md:w-full px-6 py-2 font-semibold flex justify-center items-center gap-x-2 rounded-full ${selectedFlightType === 'departure' ? 'bg-pink-500 text-text-white pink-blur' : 'bg-transparent text-pink-500 border opacity-95'
							}`}
						onClick={() => handleFlightTypeChange('departure')}
					>
						{/*@ts-ignore*/}
						<p>{translations[selectedLanguage]?.home_DivisionData_departures}</p>
						<FaPlaneDeparture></FaPlaneDeparture>
					</button>
				)}

				{filterFlights('arrival').length !== 0 && (
					<button
						className={`mx-4 max-md:mb-3 max-md:w-full px-6 py-2 font-semibold flex justify-center items-center gap-x-2 rounded-full ${selectedFlightType === 'arrival' ? 'bg-pink-500 text-text-white pink-blur' : 'bg-transparent text-pink-500 border opacity-95'
							}`}
						onClick={() => handleFlightTypeChange('arrival')}
					>
						{/*@ts-ignore*/}
						<p>{translations[selectedLanguage]?.home_DivisionData_arrivals}</p>
						<FaPlaneArrival></FaPlaneArrival>
					</button>
				)}

				{controllersInfo.length !== 0 && (
					<button
						className={`mx-4 px-6 py-2 max-md:w-full font-semibold flex justify-center items-center gap-x-2 rounded-full ${showControllerList ? 'bg-pink-500 text-text-white pink-blur' : 'bg-transparent text-pink-500 border opacity-95'
							}`}
						onClick={handleControllerList}
					>
						{/*@ts-ignore*/}
						<p>{translations[selectedLanguage]?.home_DivisionData_atcs}</p>
						<LuTowerControl></LuTowerControl>
					</button>
				)}
			</div>

			{isLoading ? (
				<p className="text-lg max-w-4xl mx-auto text-text-color text-center">
					{/*@ts-ignore*/}
					{translations[selectedLanguage]?.home_DivisionData_loading}
				</p>
			) : showControllerList ? (
				<div className="max-w-full overflow-x-auto">
					<ul className="md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{controllersInfo.map(atc => (
							<li key={atc.id} className="border-pink pink-blur rounded-lg p-4 flex items-center gap-x-5">
								<LuTowerControl className='text-text-white text-6xl opacity-80'></LuTowerControl>
								<div>
									<div className='flex items-center gap-x-3'>
										<p className='text-pink-500 font-bold'>{atc.callsign}</p>
										<span className='text-sm text-text-color'>({atc.atcSession.frequency})</span>
									</div>
									<p className='text-text-color'>VID: {atc.userId}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			) : (
				<div>
					<div className='max-w-full overflow-x-auto overflow-y-hidden'>
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
										Callsign
									</th>
									<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
										VID
									</th>
									<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
										{/*@ts-ignore*/}
										{translations[selectedLanguage]?.home_DivisionData_origin}
									</th>
									<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
										{/*@ts-ignore*/}
										{translations[selectedLanguage]?.home_DivisionData_destination}
									</th>
									<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
										{/*@ts-ignore*/}
										{translations[selectedLanguage]?.home_DivisionData_aircraft}
									</th>
									<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-pink-500 uppercase tracking-wider">
										{/*@ts-ignore*/}
										{translations[selectedLanguage]?.home_DivisionData_status}
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredFlights.slice(0, infoToShow).map(pilot => (
									<tr key={pilot.id} className='text-center'>
										<td className="px-6 py-4 whitespace-nowrap">
											<h5 className="text-text-color font-bold">{pilot.callsign}</h5>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<h5 className="text-text-color font-bold">{pilot.userId}</h5>
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
							<div className='mt-10 text-center'>
								<button className="text-pink-500 font-bold border px-8 py-1 rounded-md hover:px-10 transition-all"
									onClick={handleInfoToShow}>
									{/*@ts-ignore*/}
									{infoToShow == 7 ? translations[selectedLanguage]?.home_DivisionData_show_more : translations[selectedLanguage]?.home_DivisionData_show_less}
								</button>
							</div>

						)}
					</div>
				</div>
			)}

			<CtaIVAO></CtaIVAO>

		</div>
	);
}