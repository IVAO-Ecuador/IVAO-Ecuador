import {
	BsAirplaneFill, BsCalendar2DateFill, BsDiscord,
	BsFillAirplaneEnginesFill, BsFillRocketTakeoffFill,
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
		},
		{
			icon: BsShieldFillCheck,
			iconBackground: 'degradado-azul',
			title: 'Normas regulatorias',
			description: 'Políticas de uso',
		},
		{
			icon: BsCalendar2DateFill,
			iconBackground: 'degradado-rojo',
			title: 'Eventos',
			description: 'Conectando a través de eventos',
		},
		{
			icon: BsDiscord,
			iconBackground: 'degradado-morado',
			title: 'Discord',
			description: 'Canal oficial de comunicación',
		}
	],

	'pilotos': [
		{
			icon: BsFillRocketTakeoffFill,
			iconBackground: 'degradado-verde',
			title: 'Entrenamiento piloto',
			description: 'Amplia tus conocimientos',
		},
		{
			icon: LuTowerControl,
			iconBackground: 'degradado-azul',
			title: 'Manual de comunicaciones',
			description: 'Potencia tu habilidad de comunicación',
		}
	],

	'controladores': [
		{
			icon: LuTowerControl,
			iconBackground: 'degradado-rosa',
			title: 'Operaciones ATC',
			description: 'Procedimientos locales',
		},
		{
			icon: BsPatchQuestionFill,
			iconBackground: 'degradado-azul',
			title: 'Lineamientos examen ATC',
			description: 'Prepara tu examen',
		},
		{
			icon: BsStar,
			iconBackground: 'degradado-amarillo',
			title: 'Examen GCA',
			description: 'Controla en Ecuador',
		},
		{
			icon: BsFillRocketTakeoffFill,
			iconBackground: 'degradado-verde',
			title: 'Entrenamiento controlador',
			description: 'Amplia tus conocimientos',
		}
	],

	'recursos': [
		{
			icon: LuMap,
			iconBackground: 'degradado-amarillo',
			title: 'Cartas de navegación',
			description: 'Actualizadas para su uso',
		},
		{
			icon: BsFillAirplaneEnginesFill,
			iconBackground: 'degradado-verde',
			title: 'Operaciones especiales',
			description: 'Impacto desde las alturas',
		},
		{
			icon: BsPlusCircle,
			iconBackground: 'degradado-azul',
			title: 'Otros recursos',
			description: 'Documentos, información y más',
		}
	]
}