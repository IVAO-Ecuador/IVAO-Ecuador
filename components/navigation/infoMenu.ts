import {
	BsAirplaneFill, BsCalendar2DateFill, BsClipboardDataFill, BsDiscord,
	BsFillAirplaneEnginesFill, BsFillClipboard2DataFill, BsFillRocketTakeoffFill,
	BsPatchQuestionFill, BsPlusCircle, BsShieldFillCheck,
	BsStar } from "react-icons/bs";

import { LuMap, LuTowerControl } from "react-icons/lu";

export const infoMenu = {
	'division': [
		{
			icon: BsAirplaneFill,
			iconBackground: 'degradado-amarillo',
			title: 'Sobre IVAO Ecuador',
			description: 'Conoce nuestra historia',
			url: '/about',
			newTab: false
		},
		{
			icon: BsShieldFillCheck,
			iconBackground: 'degradado-azul',
			title: 'Normas regulatorias',
			description: 'Políticas de uso',
			url: 'https://wiki.ivao.aero/en/home/ivao/information',
			newTab: true
		},
		{
			icon: BsCalendar2DateFill,
			iconBackground: 'degradado-rojo',
			title: 'Eventos',
			description: 'Conectando a través de eventos',
			url: '#',
			newTab: false
		},
		{
			icon: BsClipboardDataFill,
			iconBackground: 'degradado-verde',
			title: 'Entrenamientos',
			description: 'Mejora tus habilidades',
			url: '#',
			newTab: false
		},
		{
			icon: BsDiscord,
			iconBackground: 'degradado-morado',
			title: 'Discord',
			description: 'Canal oficial de comunicación',
			url: 'https://discord.gg/hJ3xNWVuP9',
			newTab: true
		}
	],

	'pilotos': [
		{
			icon: LuTowerControl,
			iconBackground: 'degradado-azul',
			title: 'Manual de comunicaciones',
			description: 'Potencia tu habilidad de comunicación',
			url: '#',
			newTab: false
		}
	],

	'controladores': [
		{
			icon: LuTowerControl,
			iconBackground: 'degradado-rosa',
			title: 'Operaciones ATC',
			description: 'Procedimientos locales',
			url: '#',
			newTab: false
		},
		{
			icon: BsPatchQuestionFill,
			iconBackground: 'degradado-azul',
			title: 'Lineamientos examen ATC',
			description: 'Prepara tu examen',
			url: '#',
			newTab: false
		},
		{
			icon: BsStar,
			iconBackground: 'degradado-amarillo',
			title: 'Examen GCA',
			description: 'Controla en Ecuador',
			url: '#',
			newTab: false
		}
	],

	'recursos': [
		{
			icon: LuMap,
			iconBackground: 'degradado-amarillo',
			title: 'Cartas de navegación',
			description: 'Actualizadas para su uso',
			url: 'https://charts.ec.ivao.aero/',
			newTab: true
		},
		{
			icon: BsFillAirplaneEnginesFill,
			iconBackground: 'degradado-verde',
			title: 'Operaciones especiales',
			description: 'Impacto desde las alturas',
			url: '/special-operations',
			newTab: false
		},
		{
			icon: BsPlusCircle,
			iconBackground: 'degradado-azul',
			title: 'Otros recursos',
			description: 'Documentos, información y más',
			url: '/resources',
			newTab: false
		}
	]
}