import React, { useEffect, useRef, useState } from 'react'
import { BsFillLightningFill } from "react-icons/bs";

export default function AInformation() {

	const imageRef = useRef<HTMLImageElement>(null);
	const [originalY, setOriginalY] = useState(0);
	const [scrollY, setScrollY] = useState(0);
	const [startTransitionY, setStartTransitionY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const image = imageRef.current;

		if (image) {
			const imageRect = image.getBoundingClientRect();
			setOriginalY(imageRect.top + window.scrollY);

			const windowHeight = window.innerHeight || document.documentElement.clientHeight;
			const transitionOffset = windowHeight * 0.2; // Ajusta aquí el porcentaje de la altura de la ventana donde deseas que inicie la animación
			setStartTransitionY(imageRect.top - transitionOffset);
		}
	}, []);

	let translateY = Math.max(scrollY - startTransitionY, 0) * 0.4; // Ajusta aquí la velocidad de desplazamiento (0.2 representa la velocidad del 20% de la distancia de desplazamiento)

	const maxTranslateY = 400; // Ajusta aquí la cantidad máxima de píxeles que la imagen puede moverse hacia adelante

	if (translateY > maxTranslateY) {
		translateY = maxTranslateY;
	}


	return (
		<div>
			<div className="flex relative z-50 items-center justify-center mx-auto mb-16 rounded-full text-4xl w-[72px] h-[72px] info-number text-light-blue bg-[#183367]">
				<BsFillLightningFill></BsFillLightningFill>
			</div>

			<p className="text-2xl font-bold mb-2 text-light-blue text-center">¡Abordando ahora, a nivel local!</p>
			<h2 className="text-4xl font-bold text-text-white text-center">Comienza y Explora</h2>
			<hr className="w-40 mx-auto my-6 border-light-blue"></hr>
			<p className="text-lg max-w-4xl mx-auto text-text-color text-center">Comienza con tu experiencia en IVAO Ecuador, o únete a través de una plantilla. Nuestra plataforma extiende tu experiencia con complementos y gestión de variables para que los entornos sean los mismos en vivo y en local.</p>

			<div className='flex gap-x-5 mt-24'>
				<div className='w-2/5 text-text-white grid justify-end gap-y-8'>
					<div className='w-[368px] h-48'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								<p className="text-h5 font-semibold mb-4 text-blue-700">Solid Base</p>
								<p className="text-sm text-gray-600">Start from scratch or pick a template to deploy instantly, from bots to blogs.</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" stroke-width="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="pl-1 pt-1 w-10 h-10 step-feature-card text-[#306EE8]" aria-hidden="true">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zap"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z">
										</path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[368px] h-48'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								<p className="text-h5 font-semibold mb-4 text-blue-700">Solid Base</p>
								<p className="text-sm text-gray-600">Start from scratch or pick a template to deploy instantly, from bots to blogs.</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" stroke-width="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="pl-1 pt-1 w-10 h-10 step-feature-card text-[#306EE8]" aria-hidden="true">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zap"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z">
										</path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='w-1/5 text-text-white relative'>
					<div className="w-4 -mt-12 h-[130%] mx-auto blue-track"></div>
					<img
						ref={imageRef}
						src="/icons/airplane.svg"
						className='absolute top-0 bottom-0 w-24 airplane'
						style={{ transform: `translateY(${translateY}px) rotate(180deg)` }}
					/>
				</div>


				<div className='w-2/5 text-text-white grid justify-start gap-y-8'>
					<div className='w-[368px] h-48'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								<p className="text-h5 font-semibold mb-4 text-blue-700">Solid Base</p>
								<p className="text-sm text-gray-600">Start from scratch or pick a template to deploy instantly, from bots to blogs.</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" stroke-width="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="pl-1 pt-1 w-10 h-10 step-feature-card text-[#306EE8]" aria-hidden="true">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zap"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z">
										</path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[368px] h-48'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								<p className="text-h5 font-semibold mb-4 text-blue-700">Solid Base</p>
								<p className="text-sm text-gray-600">Start from scratch or pick a template to deploy instantly, from bots to blogs.</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" stroke-width="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" stroke-width="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="pl-1 pt-1 w-10 h-10 step-feature-card text-[#306EE8]" aria-hidden="true">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zap"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z">
										</path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
