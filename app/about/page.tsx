
import React from 'react'
import { BsHeartFill } from 'react-icons/bs'

export default function About() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue pb-56 relative">
				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-main-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsHeartFill className='text-sm'></BsHeartFill>
							<p>Historia</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Sobre IVAO Ecuador</h1>
					</div>
				</div>

				<div className='container'>
					<div className="grid grid-cols-5 grid-rows-6 gap-4">
						<div className="row-span-6">1</div>
						<div className="row-span-2">2</div>
						<div className="row-span-2 col-start-2 row-start-3">3</div>
						<div className="row-span-2 col-start-2 row-start-5">4</div>
						<div className="row-span-3 col-start-3 row-start-1">5</div>
						<div className="row-span-3 col-start-3 row-start-4">6</div>
						<div className="col-span-2 row-span-2 col-start-4 row-start-1">7</div>
						<div className="row-span-4 col-start-4 row-start-3">8</div>
						<div className="row-span-2 col-start-5 row-start-3">9</div>
						<div className="row-span-2 col-start-5 row-start-5">10</div>
					</div>
				</div>
			</div>
		</div>
	)
}
