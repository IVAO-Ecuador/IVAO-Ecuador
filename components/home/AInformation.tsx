import React, { useEffect, useRef, useState } from 'react'
import { BsAwardFill, BsBoxSeam, BsFillAirplaneFill, BsFillEaselFill, BsFillLightningFill, BsHeartFill } from "react-icons/bs";
import { translations } from '../translation/translations';
import { useGlobalContext } from '@/app/context/transalation';

export default function AInformation() {

	const airplaneRef = useRef<HTMLImageElement>(null);
	const { selectedLanguage } = useGlobalContext();

	useEffect(() => {
		let animationFrameId: number;
		const airplane = airplaneRef.current;
		let finisher: boolean;

		if (!airplane) return;

		const airplaneRect = airplane.getBoundingClientRect();
		const windowHeight = window.innerHeight;
		const startingPosition = (airplaneRect.top + 250) - windowHeight;
		const windowScroll = window.scrollY;

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const distance = Math.max(0, scrollPosition - startingPosition);
			const translateY = Math.min(distance, 335);

			if (translateY == 335 && windowScroll != 0) {
				if (!finisher) {
					airplane.style.transform = `translateY(${175}px)`;
				}
			} else {
				airplane.style.transform = `translateY(${translateY}px)`;
				finisher = true;
			}

			if (distance <= 335) {
				animationFrameId = requestAnimationFrame(handleScroll);
			}
		};

		handleScroll(); // Call the initial scroll handler

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<div className='relative z-50 pt-12 pb-20 -mt-5'>
			<div className="flex mt-20 relative z-50 items-center justify-center mx-auto mb-16 rounded-full text-4xl w-[72px] h-[72px] info-number-blue text-light-blue bg-[#183367]">
				<BsFillLightningFill></BsFillLightningFill>
			</div>

			{/*@ts-ignore*/}
			<p className="text-2xl font-bold mb-2 text-light-blue text-center">{translations[selectedLanguage]?.home_first_label}</p>
			{/*@ts-ignore*/}
			<h2 className="text-4xl font-bold text-text-white text-center">{translations[selectedLanguage]?.home_AInformation_title}</h2>
			<hr className="w-40 mx-auto my-6 border-light-blue"></hr>
			{/*@ts-ignore*/}
			<p className="text-lg max-w-4xl mx-auto text-text-color text-center">{translations[selectedLanguage]?.home_AInformation_description}</p>

			<div className='lg:flex gap-x-5 lg:mt-24 mt-16 justify-center pb-36'>
				<div className='lg:w-2/5 w-full justify-center text-text-white grid lg:justify-end gap-y-8 max-sm:scale-95'>
					<div className='w-[368px] h-48 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								{/*@ts-ignore*/}
								<p className="text-lg font-semibold mb-4 text-text-blue">{translations[selectedLanguage]?.home_AInformation_training}</p>
								{/*@ts-ignore*/}
								<p className="text-sm text-text-color">{translations[selectedLanguage]?.home_AInformation_training_text}</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" strokeWidth="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="text-2xl mr-1 mb-2 text-[#306EE8]" aria-hidden="true">
										<BsFillEaselFill></BsFillEaselFill>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[368px] h-48 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								{/*@ts-ignore*/}
								<p className="text-lg font-semibold mb-4 text-text-blue">{translations[selectedLanguage]?.home_AInformation_events}</p>
								{/*@ts-ignore*/}
								<p className="text-sm text-text-color">{translations[selectedLanguage]?.home_AInformation_events_text}</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" strokeWidth="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="text-2xl mr-1 mb-2 text-[#306EE8]" aria-hidden="true">
										<BsAwardFill></BsAwardFill>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='w-1/5 text-text-white relative lg:flex justify-center hidden'>
					<div className="w-4 -mt-12 h-[130%] mx-auto blue-track"></div>
					<img
						ref={airplaneRef}
						src="/icons/airplane.png"
						className='absolute top-0 bottom-0 w-24'
						style={{ transform: 'translateY(0) rotate(180deg)' }}
					/>
				</div>


				<div className='lg:w-2/5 w-full justify-center text-text-white grid lg:justify-start gap-y-8 max-lg:mt-8 max-sm:mt-3 max-sm:scale-95'>
					<div className='w-[368px] h-48 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								{/*@ts-ignore*/}
								<p className="text-lg font-semibold mb-4 text-text-blue">{translations[selectedLanguage]?.home_AInformation_resources}</p>
								{/*@ts-ignore*/}
								<p className="text-sm text-text-color">{translations[selectedLanguage]?.home_AInformation_resources_text}</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" strokeWidth="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="text-2xl mr-1 mb-2 text-[#306EE8]" aria-hidden="true">
										<BsBoxSeam></BsBoxSeam>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[368px] h-48 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
						<div className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl overflow-hidden text-left bg-background info-box">
							<div className="col-span-3">
								{/*@ts-ignore*/}
								<p className="text-lg font-semibold mb-4 text-text-blue">{translations[selectedLanguage]?.home_AInformation_community}</p>
								{/*@ts-ignore*/}
								<p className="text-sm text-text-color">{translations[selectedLanguage]?.home_AInformation_community_text}</p>
							</div>
							<div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32 text-light-blue ">
								<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0 opacity-40">
									<path d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z" stroke="#183367" strokeWidth="2"></path>
									<path d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z" stroke="#183367" strokeWidth="2">
									</path>
								</svg>
								<div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background bg-dark-blue">
									<div className="text-2xl mr-1 mb-2 text-[#306EE8]" aria-hidden="true">
										<BsHeartFill></BsHeartFill>
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
