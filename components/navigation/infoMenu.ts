import {
	BsAirplaneFill, BsCalendar2DateFill, BsClipboardDataFill, BsDiscord,
	BsFillAirplaneEnginesFill, BsFillClipboard2DataFill, BsFillRocketTakeoffFill,
	BsGeoAltFill,
	BsPatchQuestionFill, BsPlusCircle, BsShieldFillCheck,
	BsStar } from "react-icons/bs";

import { LuMap, LuTowerControl } from "react-icons/lu";

export const infoMenu = {
	'division': [
		{
			icon: BsAirplaneFill,
			iconBackground: 'degradado-amarillo',
			title: {
				Español: 'Sobre IVAO Ecuador',
				English: 'About IVAO Ecuador',
			},
			description: {
				Español: 'Conoce nuestra historia',
				English: 'Learn about our history',
			},
			url: '/about',
			newTab: false
		},
		{
			icon: BsShieldFillCheck,
			iconBackground: 'degradado-azul',
			title: {
				Español: 'Normas regulatorias',
				English: 'Regulatory rules',
			},
			description: {
				Español: 'Políticas de uso',
				English: 'Usage policies',
			},
			url: 'https://wiki.ivao.aero/en/home/ivao/information',
			newTab: true
		},
		{
			icon: BsCalendar2DateFill,
			iconBackground: 'degradado-rojo',
			title: {
				Español: 'Eventos',
					English: 'Events',
			},
			description: {
				Español: 'Conectando a través de eventos',
				English: 'Connecting through events',
			},
			url: '/events',
			newTab: false
		},
		/*{
			icon: BsClipboardDataFill,
			iconBackground: 'degradado-verde',
			title: {
				Español: 'Entrenamientos',
				English: 'Trainings',
			},
			description: {
				Español: 'Mejora tus habilidades',
				English: 'Improve your skills',
			},
			url: '/training',
			newTab: false
		}*/,
		{
			icon: BsDiscord,
			iconBackground: 'degradado-morado',
			title: {
				Español: 'Discord',
				English: 'Discord',
			},
			description: {
				Español: 'Canal oficial de comunicación',
				English: 'Official communication channel',
			},
			url: 'https://discord.gg/hJ3xNWVuP9',
			newTab: true
		}
	],

	'pilotos': [
		{
			icon: BsGeoAltFill,
			iconBackground: 'degradado-rojo',
			title: {
				Español: 'IVAO Webeye',
				English: 'IVAO Webeye',
			},
			description: {
				Español: 'Mapa en tiempo real de vuelos',
				English: 'Real-time flight map',
			},
			url: 'https://webeye.ivao.aero/',
			newTab: true
		},
		{
			icon: LuTowerControl,
			iconBackground: 'degradado-azul',
			title: {
				Español: 'Manual de comunicaciones',
				English: 'Communications manual',
			},
			description: {
				Español: 'Potencia tu habilidad de comunicación',
				English: 'Enhance your communication skills',
			},
			url: '/comms',
			newTab: false
		}
	],

	'controladores': [
		{
			icon: LuTowerControl,
			iconBackground: 'degradado-rosa',
			title: {
				Español: 'Operaciones ATC',
				English: 'ATC Operations',
			},
			description: {
				Español: 'Procedimientos locales',
				English: 'Local procedures',
			},
			url: '/atc-operations',
			newTab: false
		},
		{
			icon: BsPatchQuestionFill,
			iconBackground: 'degradado-azul',
			title: {
				Español: 'Lineamientos examen ATC',
				English: 'ATC Exam Guidelines',
			},
			description: {
				Español: 'Prepara tu examen',
				English: 'Prepare for your exam',
			},
			url: '/atc-guidelines',
			newTab: false
		},
		{
			icon: BsStar,
			iconBackground: 'degradado-amarillo',
			title: {
				Español: 'Examen GCA',
				English: 'GCA Exam',
			},
			description: {
				Español: 'Controla en Ecuador',
				English: 'Control in Ecuador',
			},
			url: '/gca-exam',
			newTab: false
		}
	],

	'recursos': [
		{
			icon: LuMap,
			iconBackground: 'degradado-amarillo',
			title: {
				Español: 'Cartas de navegación',
				English: 'Navigation charts',
			},
			description: {
				Español: 'Actualizadas para su uso',
				English: 'Updated for your use',
			},
			url: 'https://charts.ec.ivao.aero/',
			newTab: true
		},
		{
			icon: BsFillAirplaneEnginesFill,
			iconBackground: 'degradado-verde',
			title: {
				Español: 'Operaciones especiales',
				English: 'Special Operations',
			},
			description: {
				Español: 'Impacto desde las alturas',
				English: 'Impact from the heights',
			},
			url: '/special-operations',
			newTab: false
		},
		{
			icon: BsPlusCircle,
			iconBackground: 'degradado-azul',
			title: {
				Español: 'Otros recursos',
				English: 'Other Resources',
			},
			description: {
				Español: 'Documentos, información y más',
				English: 'Documents, information, and more',
			},
			url: '/resources',
			newTab: false
		}
	]
}