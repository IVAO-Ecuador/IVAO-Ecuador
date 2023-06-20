
import React from 'react'
import { BsFillAirplaneEnginesFill } from 'react-icons/bs'

export default function SpecialOperations() {
	return (
		<div className="overflow-hidden relative">
			<div className="bg-dark-blue pb-56 relative">
				<div className='bg-[url("/images/resources.jpg")] bg-cover bg-no-repeat bg-center h-60 flex items-center'>
					<div className='container px-8'>
						<div className='text-text-white bg-green px-5 py-1 rounded flex w-min items-center gap-x-2'>
							<BsFillAirplaneEnginesFill className='text-sm'></BsFillAirplaneEnginesFill>
							<p>Departamento</p>
						</div>
						<h1 className='text-text-white md:text-6xl text-4xl mt-5 font-extrabold'>Operaciones especiales</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
