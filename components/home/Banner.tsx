import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import GlobeCanvas from './GlobeCanvas'
import { useGlobalContext } from '@/app/context/transalation';
import { translations } from '../translation/translations';

export default function Banner() {

	const { selectedLanguage } = useGlobalContext();

	return (
		<>
			<ul className="box-area2 absolute z-0">
				<li></li><li></li><li></li><li></li><li></li>
			</ul>
			<div className="xl:flex xl:items-center relative z-0 max-xl:mt-16">
				<div className="xl:w-1/2 w-full ">
					{/*@ts-ignore*/}
					<p className="text-text-color opacity-50 md:mb-8 select-none mb-10">✔️ {translations[selectedLanguage]?.home_label}</p>
					{/*@ts-ignore*/}
					<h1 className="sm:text-6xl text-5xl font-bold text-text-white mb-8">{translations[selectedLanguage]?.home_title}</h1>
					{/*@ts-ignore*/}
					<p className="text-text-color text-lg">{translations[selectedLanguage]?.home_description}</p>

					<div className="md:flex gap-x-5 mt-10">
						{/*@ts-ignore*/}
						<button className="bg-main-green max-md:w-full max-md:mb-5 text-text-white px-8 py-3 rounded-md">{translations[selectedLanguage]?.home_signup}</button>
						<button className="bg-main-purple max-md:w-full  text-text-white px-8 py-3 rounded-md flex justify-center items-center gap-x-2">
							<RiSendPlaneFill></RiSendPlaneFill>
							{/*@ts-ignore*/}
							{translations[selectedLanguage]?.home_first_steps}
						</button>
					</div>
				</div>
				<div className="opacity-60 xl:w-1/2 w-full">
					<div className="xl:ml-20 max-xl:hidden relative z-20">
						<GlobeCanvas />
					</div>
				</div>
			</div>
		</>
	)
}
