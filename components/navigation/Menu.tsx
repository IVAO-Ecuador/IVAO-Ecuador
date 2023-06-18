'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef, MouseEvent } from 'react'

import {
	BsAirplaneFill, BsCalendar2DateFill, BsDiscord,
	BsFillAirplaneEnginesFill, BsFillRocketTakeoffFill,
	BsPatchQuestionFill, BsPlusCircle, BsShieldFillCheck,
	BsStar
} from "react-icons/bs";

import { LuMap, LuTowerControl } from "react-icons/lu";
import { FiChevronDown, FiLoader, FiX } from "react-icons/fi";
import { RiMenuLine, RiTranslate2 } from "react-icons/ri";

export default function Menu() {

	const [eventAlert, setEventAlert] = useState(true);
	const [activeMenu, setActiveMenu] = useState<string|null>(null);
	const [responsiveMenu, setResponsiveMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const dropdownRefs = useRef<any>({ division: null, pilotos: null, controladores: null, recursos: null });

	const closeEventAlert = () => {
		setEventAlert(false);
	}

	const handleMenuClick = (menu : string) => {
		setActiveMenu((activeMenu === menu) ? null : menu);
	}

	const isMenuActive = (menu : string) => {
		return activeMenu === menu;
	}

	const handleResponsiveMenu = () => {
		setResponsiveMenu(!responsiveMenu);
	}

	useEffect(() => {
		/*const handleOutsideClick = (event : MouseEvent) => {
			let isClickInside = false;
			Object.values(dropdownRefs.current).forEach(ref => {
				if (ref && ref.contains(event.target)) {
					isClickInside = true;
				}
			});
			if (isClickInside) {
				setActiveMenu(null);
			}
		};*/

		const adjustSize = () => {
			setScreenWidth(window.innerWidth)
		}

		//document.addEventListener('mousedown', handleOutsideClick);
		window.addEventListener('resize', adjustSize)

		return () => {
			//document.removeEventListener('mousedown', handleOutsideClick);
			window.addEventListener('resize', adjustSize)
		};
	}, []);


	return (
		<div>
			<div className='flex max-xl:flex-wrap text-text-color justify-between max-md:mt-2 max-sm:justify-center text-center items-center container max-lg:px-8 mb-2 z-50 relative'>
				<div className='xl:w-1/4 lg:w-1/2 md:w-1/2 w-2/3'>
					<Image
						src={'/logos/logo-complete.png'}
						width={300}
						height={30}
						alt='Logo de IVAO Ecuador'
					></Image>
				</div>

				{(responsiveMenu || screenWidth >= 1220) && (

					<div className='xl:w-2/3 lg:flex gap-x-14 max-lg:justify-evenly justify-center items-center max-xl:order-3 max-xl:w-full '>
						<div className={`flex max-lg:flex-wrap items-center justify-center gap-x-2 cursor-pointer max-lg:border-b-[1px] max-lg:border-hover-color relative py-6 ${isMenuActive('division') ? 'active' : ''}`} onClick={() => handleMenuClick('division')}>
							<p>División</p>
							<FiChevronDown className={`transition-all ${isMenuActive('division') ? 'rotate-180' : 'rotate-0'}`} />
							{isMenuActive('division') && (
								<div ref={ref => (dropdownRefs.current.division = ref)} className={`${(screenWidth < 870) ? 'dropdown-responsive-menu' : 'dropdown-menu'} dropdown-menu relative w-full max-lg:mt-8 lg:absolute lg:top-20 bg-sub-menus lg:w-96 rounded-md lg:-left-24 p-3 border-menu z-50`}>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-amarillo h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsAirplaneFill className='text-text-white'></BsAirplaneFill>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Sobre IVAO Ecuador</p>
											<p className='text-sm'>Conoce nuestra historia</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-azul h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsShieldFillCheck className='text-text-white'></BsShieldFillCheck>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Normas regulatorias</p>
											<p className='text-sm'>Políticas de uso</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-rojo h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsCalendar2DateFill className='text-text-white'></BsCalendar2DateFill>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Eventos</p>
											<p className='text-sm'>Conectando a través de eventos</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px]'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-morado h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsDiscord className='text-text-white'></BsDiscord>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Discord</p>
											<p className='text-sm'>Canal oficial de comunicación</p>
										</div>
									</div>

								</div>
							)}
						</div>

						<div className={`flex max-lg:flex-wrap items-center gap-x-2 justify-center max-lg:border-b-[1px] max-lg:border-hover-color cursor-pointer relative py-6 ${isMenuActive('pilotos') ? 'active' : ''}`} onClick={() => handleMenuClick('pilotos')}>
							<p>Pilotos</p>
							<FiChevronDown className={`transition-all ${isMenuActive('pilotos') ? 'rotate-180' : 'rotate-0'}`} />
							{isMenuActive('pilotos') && (
								<div ref={ref => (dropdownRefs.current.division = ref)} className={`${(screenWidth < 870) ? 'dropdown-responsive-menu' : 'dropdown-menu'} dropdown-menu relative w-full max-lg:mt-8 lg:absolute lg:top-20 bg-sub-menus lg:w-96 rounded-md lg:-left-24 p-3 border-menu z-50`}>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-min-h-[65px] mb-4'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-verde h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsFillRocketTakeoffFill className='text-text-white'></BsFillRocketTakeoffFill>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Entrenamiento piloto</p>
											<p className='text-sm'>Amplia tus conocimientos</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-min-h-[65px]'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-azul h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<LuTowerControl className='text-text-white'></LuTowerControl>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Manual de comunicaciones</p>
											<p className='text-sm'>Potencia tu habilidad de comunicación</p>
										</div>
									</div>

								</div>
							)}
						</div>

						<div className={`flex max-lg:flex-wrap items-center gap-x-2 justify-center cursor-pointer max-lg:border-b-[1px] max-lg:border-hover-color relative py-6 ${isMenuActive('controladores') ? 'active' : ''}`} onClick={() => handleMenuClick('controladores')}>
							<p>Controladores</p>
							<FiChevronDown className={`transition-all ${isMenuActive('controladores') ? 'rotate-180' : 'rotate-0'}`} />
							{isMenuActive('controladores') && (
								<div ref={ref => (dropdownRefs.current.division = ref)} className={`${(screenWidth < 870) ? 'dropdown-responsive-menu' : 'dropdown-menu'} dropdown-menu relative w-full max-lg:mt-8 lg:absolute lg:top-20 bg-sub-menus lg:w-96 rounded-md lg:-left-24 p-3 border-menu z-50`}>



									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-rosa h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<LuTowerControl className='text-text-white'></LuTowerControl>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Operaciones ATC</p>
											<p className='text-sm'>Procedimientos locales</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-azul h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsPatchQuestionFill className='text-text-white'></BsPatchQuestionFill>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Lineamientos examen ATC</p>
											<p className='text-sm'>Prepara tu examen</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-amarillo h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsStar className='text-text-white'></BsStar>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Examen GCA</p>
											<p className='text-sm'>Controla en Ecuador</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px]'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-verde h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsFillRocketTakeoffFill className='text-text-white'></BsFillRocketTakeoffFill>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Entrenamiento controlador</p>
											<p className='text-sm'>Amplia tus conocimientos</p>
										</div>
									</div>

								</div>
							)}
						</div>

						<div className={`flex max-lg:flex-wrap items-center gap-x-2 justify-center cursor-pointer relative py-6 ${isMenuActive('recursos') ? 'active' : ''}`} onClick={() => handleMenuClick('recursos')}>
							<p>Recursos</p>
							<FiChevronDown className={`transition-all ${isMenuActive('recursos') ? 'rotate-180' : 'rotate-0'}`} />
							{isMenuActive('recursos') && (
								<div ref={ref => (dropdownRefs.current.division = ref)} className={`${(screenWidth < 870) ? 'dropdown-responsive-menu' : 'dropdown-menu'} dropdown-menu relative w-full max-lg:mt-8 lg:absolute lg:top-20 bg-sub-menus lg:w-96 rounded-md lg:-left-24 p-3 border-menu z-50`}>



									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-2'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-amarillo h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<LuMap className='text-text-white'></LuMap>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Cartas de navegación</p>
											<p className='text-sm'>Actualizadas para su uso</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-h-[65px] mb-3'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-verde h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsFillAirplaneEnginesFill className='text-text-white'></BsFillAirplaneEnginesFill>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Operaciones especiales</p>
											<p className='text-sm'>Impacto desde las alturas</p>
										</div>
									</div>

									<div className='flex hover:bg-hover-color rounded-md items-center p-1 transition-all min-min-h-[65px]'>
										<div className='w-1/6 flex justify-center'>
											<div className='degradado-azul h-full flex items-center justify-center text-lg p-[14px] rounded-md'>
												<BsPlusCircle className='text-text-white'></BsPlusCircle>
											</div>
										</div>
										<div className='text-left lg:ml-3 md:ml-0 ml-5 max-lg:w-full'>
											<p className='text-text-white'>Otros recursos</p>
											<p className='text-sm'>Documentos, información y más</p>
										</div>
									</div>

								</div>
							)}
						</div>
					</div>
				)}



				<div className='xl:w-1/4 lg:w-1/2 md:w-1/2 w-1/3 max-md:pr-3 flex xl:justify-center justify-end gap-x-5'>
					<div className='md:flex hidden xl:justify-center justify-end items-center gap-x-5'>
						<div className='border p-2 rounded-md opacity-40 cursor-pointer'>
							<RiTranslate2 className='text-xl'></RiTranslate2>
						</div>
						<button className='bg-main-green text-text-white px-5 py-2 rounded-md'>Iniciar sesión</button>
					</div>
					<div className='xl:hidden  border p-2 rounded-md cursor-pointer' onClick={handleResponsiveMenu}>
						<RiMenuLine className='text-xl font-bold'></RiMenuLine>
					</div>
				</div>
			</div>

			{eventAlert && (
				<div className='bg-main-purple py-[10px] flex z-50 max-sm:mt-6 max-md:hidden'>
					<div className='container max-lg:px-8 sm:flex block lg:justify-around justify-between items-center text-text-white'>
						<Link href={'/'} className='sm:w-5/6'>
							<div className='flex gap-x-4 items-center max-sm:text-center'>
								<FiLoader className='max-lg:hidden'></FiLoader>
								<p className='text-[15px] max-md:mr-5'>Un nuevo evento RFO esta disponible - Inicia sesión y reserva tu lugar</p>
							</div>
						</Link>
						<FiX className='cursor-pointer max-sm:hidden' onClick={closeEventAlert}></FiX>
					</div>
				</div>
			)}
		</div>
	)
}