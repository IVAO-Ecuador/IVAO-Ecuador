'use client'

import CtaIVAO from '@/components/navigation/CtaIVAO'
import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/transalation';
import { translations } from '@/components/translation/translations';

export default function About() {

	const { selectedLanguage } = useGlobalContext();

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue relative">
				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='flex items-center gap-x-3'>
							<div className='text-text-white bg-main-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
								<BsHeartFill className='text-sm'></BsHeartFill>
								{/*@ts-ignore*/}
								<p>{translations[selectedLanguage]?.about_category}</p>
							</div>
						</div>
						{/*@ts-ignore*/}
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>{translations[selectedLanguage]?.about_title}</h1>
					</div>
				</div>

				<div className='container py-24 px-8'>
					<div>
						{/*@ts-ignore*/}
						<h2 className='text-text-white font-bold text-3xl mb-10'>{translations[selectedLanguage]?.about_title_article}</h2>
						<div className='xl:flex gap-x-5 mb-10'>
							<div className='xl:w-1/2'>
								
								{/*@ts-ignore*/}
								<p className='text-text-color mb-10 text-lg'>{translations[selectedLanguage]?.about_p1}</p>
								
								{/*@ts-ignore*/}
								<p className='text-text-color text-lg'>{translations[selectedLanguage]?.about_p2}</p>
							</div>
							<div className='xl:w-1/2 max-xl:mt-10 flex justify-center items-center'>
								<img src="/images/about/c5.jpg" alt="Imagen sobre la división de IVAO Ecuador" className='w-5/6 h-5/6 object-cover rounded-2xl brightness-50' />
							</div>
						</div>
						
						{/*@ts-ignore*/}
						<p className='text-text-color mb-10 text-lg'>{translations[selectedLanguage]?.about_p3}</p>
						
						{/*@ts-ignore*/}
						<p className='text-text-color mb-10 text-lg'>{translations[selectedLanguage]?.about_p4}</p>

						<img src="/images/about/c4.jpg" alt="Imagen sobre la división de IVAO Ecuador" className='w-full h-72 object-cover rounded-xl brightness-50' />
						
						{/*@ts-ignore*/}
						<p className='text-text-color mb-10 mt-10 text-lg'>{translations[selectedLanguage]?.about_p5}</p>

						<CtaIVAO></CtaIVAO>

					</div>
				</div>
			</div>
		</div>
	)
}
