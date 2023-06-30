'use client'

import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsClipboard2Check, BsRocketFill, BsStarFill } from 'react-icons/bs'
import { LuTowerControl } from 'react-icons/lu'
import { useGlobalContext } from '../context/transalation';
import { translations } from '@/components/translation/translations'

export default function GCAExam() {

	const { selectedLanguage } = useGlobalContext();

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/gca-exam.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<LuTowerControl className='text-sm'></LuTowerControl>
							{/*@ts-ignore*/}
							<p>{translations[selectedLanguage]?.GCAExam_category}</p>
						</div>
						{/*@ts-ignore*/}
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>{translations[selectedLanguage]?.GCAExam_title}</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.GCAExam_p1}</p>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.GCAExam_p2}</p>
					{/*@ts-ignore*/}
					<p className='text-text-color text-lg mb-8'>{translations[selectedLanguage]?.GCAExam_p3}</p>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-yellow rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsStarFill className='text-4xl text-text-white'></BsStarFill>
							</div>
							<div className='w-full'>
								{/*@ts-ignore*/}
								<h3 className='text-text-white max-md:mb-3'>{translations[selectedLanguage]?.GCAExam_document_title}</h3>
								{/*@ts-ignore*/}
								<p className='text-text-color'>{translations[selectedLanguage]?.GCAExam_document_text}</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							{/*@ts-ignore*/}
							<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>{translations[selectedLanguage]?.GCAExam_document_button}</button>
							{/*@ts-ignore*/}
							<button className='bg-pink text-text-white px-10 py-2 rounded-md max-md:w-full hover:px-11 transition-all'>{translations[selectedLanguage]?.GCAExam_request_exam}</button>
						</div>
					</div>

					<CtaIVAO></CtaIVAO>

				</div>
			</div>
		</div>
	)
}
