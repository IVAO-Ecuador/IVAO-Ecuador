'use client'

import React from "react";
import GlobeCanvas from "../components/home/GlobeCanvas";
import { RiSendPlaneFill } from "react-icons/ri";
import { Menu } from "@/components/navigation/Menu";
import AInformation from "@/components/home/AInformation";

export default function MainContent() {

	return (
		<div className="overflow-hidden relative">

			<div className="bg-degrade-purple xl:pb-20 pb-40 z-10 relative upper-diagonal-right-top">
				<header className='border-b-2 border-menu'>
					<Menu></Menu>
				</header>
				<div className="container px-8 relative z-0">
					<ul className="box-area2 absolute z-0">
						<li></li><li></li><li></li><li></li><li></li>
					</ul>
					<div className="xl:flex xl:items-center relative z-0 max-xl:mt-20">
						<div className="xl:w-1/2 w-full ">
							<p className="text-text-color opacity-50 mb-8 select-none">✔️ Estas en la página oficial de IVAO Ecuador</p>
							<h1 className="sm:text-6xl text-5xl font-bold text-text-white mb-8">Únete a la comunidad de IVAO Ecuador y vuela alto</h1>
							<p className="text-text-color text-lg">
								¡Explora el fascinante mundo de la simulación de vuelo en IVAO Ecuador! Nuestra comunidad te ofrece una experiencia única
								para disfrutar de la aviación virtual en Ecuador. Conéctate con entusiastas de la aviación, participa en eventos emocionantes,
								controla el tráfico aéreo y vive la emoción de volar en un entorno virtual realista.
							</p>

							<div className="md:flex gap-x-5 mt-10">
								<button className="bg-main-green max-md:w-full max-md:mb-5 text-text-white px-8 py-3 rounded-md">¡Registrarme!</button>
								<button className="bg-main-purple max-md:w-full  text-text-white px-8 py-3 rounded-md flex justify-center items-center gap-x-2">
									<RiSendPlaneFill></RiSendPlaneFill>
									Primeros pasos
								</button>
							</div>
						</div>
						<div className="opacity-60 xl:w-1/2 w-full">
							<div className="xl:ml-20 max-xl:hidden relative z-20">
								<GlobeCanvas />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-dark-blue pb-52">
				<div className="container relative px-8">
					<AInformation></AInformation>
				</div>
			</div>

			<div className="bg-degrade-black upper-diagonal-right-bottom">
				<div className="container relative px-8">
					
				</div>
			</div>

		</div>
	);
}