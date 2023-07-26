'use client'
import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsClipboard2Check } from 'react-icons/bs'
import { LuTowerControl } from 'react-icons/lu'
import { useGlobalContext } from '../context/transalation';
import { translations } from '@/components/translation/translations'

export default function AtcGuidelines() {

	const { selectedLanguage } = useGlobalContext();

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/atc-guidelines.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<LuTowerControl className='text-sm'></LuTowerControl>
							{/*@ts-ignore*/}
							<p>{translations[selectedLanguage]?.ATCGuide_category}</p>
						</div>
						{/*@ts-ignore*/}
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>{translations[selectedLanguage]?.ATCGuide_title}</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.ATCGuide_p1}</p>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.ATCGuide_p2}</p>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.ATCGuide_p3}</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-cyan rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsClipboard2Check className='text-4xl text-text-white'></BsClipboard2Check>
							</div>
							<div className='w-full'>
								{/*@ts-ignore*/}
								<h3 className='text-text-white max-md:mb-3'>{translations[selectedLanguage]?.ATCGuide_document_title}</h3>
								{/*@ts-ignore*/}
								<p className='text-text-color'>{translations[selectedLanguage]?.ATCGuide_document_text}</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							{/*@ts-ignore*/}
							<a href='/docs/P-INS-Lineamientos-examenes-ATC.pdf' target='_blank' className='bg-gray-200 block text-center text-text-white px-20 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>{translations[selectedLanguage]?.ATCGuide_document_button}</a>
						</div>
					</div>

					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
