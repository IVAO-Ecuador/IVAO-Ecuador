import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function CtaIVAO() {
	return (
		<div className='mt-20'>
			<div className='flex rounded-2xl overflow-hidden gap-x-8  items-center bg-[linear-gradient(110.1deg,_rgba(46,_29,_99,_0.4)_0%,_#3D0F34_100%)]'>
				<div className='xl:py-12 xl:px-16 xl:w-1/2 md:py-16 md:px-16 px-12 py-12'>
					<p className='text-3xl font-semibold mb-5 max-w-md text-text-white'>Comienza ya tu aventura en IVAO Ecuador.</p>
					<p className='text-xl mb-7 text-gray-600 text-text-color'>Escoge entre ser piloto, controlador o ambos y disfruta del increíble mundo de la simulación</p>
					<button className='bg-main-purple text-text-white px-16 py-2 rounded-md flex justify-center items-center gap-x-3'>
						<p>Registrarme ahora</p>
						<BsArrowRight className='max-md:hidden'></BsArrowRight>
					</button>
				</div>
				<div className='max-xl:hidden w-1/2'>
					<img src="/images/about/c3.jpg" alt="" className=' h-[420px] object-cover brightness-50' />
				</div>
			</div>
		</div>
	)
}
