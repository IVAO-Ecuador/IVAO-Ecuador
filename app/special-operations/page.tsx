'use client'

import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsFillAirplaneEnginesFill, BsRocketFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/transalation';
import { translations } from '@/components/translation/translations';

export default function SpecialOperations() {

	const { selectedLanguage } = useGlobalContext();

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/special-operations.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsFillAirplaneEnginesFill className='text-sm'></BsFillAirplaneEnginesFill>
							{/*@ts-ignore*/}
							<p>{translations[selectedLanguage]?.SO_category}</p>
						</div>
						{/*@ts-ignore*/}
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>{translations[selectedLanguage]?.SO_title}</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.SO_p1}</p>

					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.SO_p2}</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-green rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsRocketFill className='text-4xl text-text-white'></BsRocketFill>
							</div>
							<div className='w-full'>
								{/*@ts-ignore*/}
								<h3 className='text-text-white max-md:mb-3'>{translations[selectedLanguage]?.SO_document_title}</h3>
								{/*@ts-ignore*/}
								<p className='text-text-color'>{translations[selectedLanguage]?.SO_document_text}</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							{/*@ts-ignore*/}
							<button className='bg-gray-200 text-text-white px-20 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>{translations[selectedLanguage]?.SO_document_button}</button>
						</div>
					</div>

					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
