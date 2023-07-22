'use client'

import Image from 'next/image'
import React from 'react'
import { BsStarFill, BsTools } from 'react-icons/bs'
import { useGlobalContext } from '../context/transalation';
import { translations } from '@/components/translation/translations';

export default function Resources() {

	const { selectedLanguage } = useGlobalContext();

	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue pb-24 relative">

				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-light-blue px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsTools className='text-sm'></BsTools>
							{/*@ts-ignore*/}
							<p>{translations[selectedLanguage]?.Resources_category}</p>
						</div>
						{/*@ts-ignore*/}
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>{translations[selectedLanguage]?.Resources_title}</h1>
					</div>
				</div>

				<div className="container relative px-8 mt-24">
					<div className='lg:flex gap-x-6'>
						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
							<Image width={700} height={80} src="/images/avion.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									{/*@ts-ignore*/}
									<h3 className='text-text-white text-xl font-semibold'>{translations[selectedLanguage]?.Resources_card_1_title}</h3>
									{/*@ts-ignore*/}
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>{translations[selectedLanguage]?.Resources_card_1_category}</span>
								</div>
								{/*@ts-ignore*/}
								<p className='mt-5 text-text-color mb-5'>{translations[selectedLanguage]?.Resources_card_1_text}</p>
								{/*@ts-ignore*/}
								<a href='/docs/P-INS-Guia-novatos.pdf' target='_blank' className='bg-gray-200 text-text-white px-10 py-2 rounded-md hover:bg-gray transition-all'>{translations[selectedLanguage]?.Resources_card_1_button}</a>
							</div>
						</div>

						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
							<Image width={700} height={80} src="/images/piloto.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									{/*@ts-ignore*/}
									<h3 className='text-text-white text-xl font-semibold'>{translations[selectedLanguage]?.Resources_card_2_title}</h3>
									{/*@ts-ignore*/}
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>{translations[selectedLanguage]?.Resources_card_2_category}</span>
								</div>
								{/*@ts-ignore*/}
								<p className='mt-5 text-text-color mb-5'>{translations[selectedLanguage]?.Resources_card_2_text}</p>
								{/*@ts-ignore*/}
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md hover:bg-gray transition-all'>{translations[selectedLanguage]?.Resources_card_2_button}</button>
							</div>
						</div>

						<div className='lg:w-1/3 h-auto bg-hover-color rounded-xl max-lg:mb-8 transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>
							<Image width={700} height={80} src="/images/torrecontrol.jpg"
								alt="Imagen de principiantes" className='xl:h-[248px] lg:h-44 max-lg:h-52 object-cover rounded-tr-lg rounded-tl-lg'
							/>
							<div className='p-7'>
								<div className='xl:flex gap-x-3 items-center'>
									{/*@ts-ignore*/}
									<h3 className='text-text-white text-xl font-semibold'>{translations[selectedLanguage]?.Resources_card_3_title}</h3>
									{/*@ts-ignore*/}
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>{translations[selectedLanguage]?.Resources_card_3_category}</span>
								</div>
								{/*@ts-ignore*/}
								<p className='mt-5 text-text-color mb-5'>{translations[selectedLanguage]?.Resources_card_3_text}</p>
								{/*@ts-ignore*/}
								<button className='bg-gray-200 text-text-white px-10 py-2 rounded-md hover:bg-gray transition-all'>{translations[selectedLanguage]?.Resources_card_3_button}</button>
							</div>
						</div>
					</div>

					<div className='w-full bg-hover-color rounded-xl xl:flex mt-8 p-8'>
						<div className='xl:flex items-center gap-x-8 xl:w-7/12 max-xl:text-center max-xl:mb-5'>
							<div className='bg-yellow rounded-full p-3 w-min mx-auto max-xl:mb-5'>
								<BsStarFill className='text-4xl text-text-white'></BsStarFill>
							</div>
							<div className='w-full'>
								{/*@ts-ignore*/}
								<h3 className='text-text-white max-md:mb-3'>{translations[selectedLanguage]?.Resources_GCA_title}</h3>
								{/*@ts-ignore*/}
								<p className='text-text-color'>{translations[selectedLanguage]?.Resources_GCA_text}</p>
							</div>
						</div>

						<div className='md:flex xl:justify-end justify-center gap-x-5 items-center xl:w-5/12'>
							{/*@ts-ignore*/}
							<a href='/docs/P-INS-Lineamientos-examen-GCA.pdf' target='_blank' className='bg-gray-200 text-text-white px-10 py-2 rounded-md max-md:w-full max-md:mb-2 hover:bg-gray transition-all'>{translations[selectedLanguage]?.Resources_GCA_button}</a>
							{/*@ts-ignore*/}
							<button className='bg-pink text-text-white px-10 py-2 rounded-md max-md:w-full hover:px-11 transition-all'>{translations[selectedLanguage]?.Resources_GCA_request_exam}</button>
						</div>
					</div>

					{
						/*
						<div className='mt-16'>
							<h3 className='text-text-white text-2xl mb-8'>{translations[selectedLanguage]?.Resources_last_resources}</h3>

							<div className='lg:flex items-center justify-between border-documents p-8 
									hover:bg-sub-menus rounded-sm transition-all cursor-pointer mb-3 max-lg:bg-sub-menus max-lg:rounded-md'>
								<div className='lg:flex gap-x-5 items-center '>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
									<h4 className='text-text-color'>Lineamientos para examen GCA</h4>
								</div>
								<div>
									<p className='text-text-color'>Actualizado el 05/10/2023</p>
								</div>
							</div>

							<div className='lg:flex items-center justify-between border-documents p-8 
									hover:bg-sub-menus rounded-sm transition-all cursor-pointer mb-3 max-lg:bg-sub-menus max-lg:rounded-md'>
								<div className='lg:flex gap-x-5 items-center '>
									<span className='text-sm text-text-white px-2 rounded-sm bg-cyan'>Entrenamientos</span>
									<h4 className='text-text-color'>Lineamientos para examen GCA</h4>
								</div>
								<div>
									<p className='text-text-color'>Actualizado el 05/10/2023</p>
								</div>
							</div>
						</div>
						*/
					}



				</div>
			</div>
		</div>
	)
}
