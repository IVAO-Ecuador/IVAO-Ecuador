'use client'

import { getUserData } from '@/auth/components/userData';
import { IUser } from '@/auth/types/user';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { redirect } from 'next/navigation';

export default function Profile() {
	const { status } = useSession();
	const [userData, setUserData] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const refreshData = async () => {
			const result = await getUserData();
			setUserData(result);
		};

		if (status === 'authenticated' || status === 'loading') {
			refreshData().then(() => {
				setIsLoading(false);
			});
		} else {
			setIsLoading(false);
			redirect('/')
		}
	}, [status]);

	if (isLoading) {

		return (
			<div className='container py-10'>
				<div className='bg-gray w-full h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
				<div className='flex gap-x-5'>
					<div className='bg-gray w-1/2 h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
					<div className='bg-gray w-1/2 h-36 rounded-xl opacity-20 skeleton-animation mb-5'></div>
				</div>
				<div className='bg-gray w-full h-96 rounded-xl opacity-20 skeleton-animation mb-5'></div>
			</div>
		)

	} else if (userData) {
		return (
			<div className="overflow-hidden relative">
				<div className="bg-dark-blue relative">
					<div className="bg-[url('/images/training.jpg')] bg-cover bg-no-repeat bg-center h-60 flex items-center">
						<div className="container px-8">
							<div className="text-text-white bg-green px-5 py-1 rounded flex w-32 items-center gap-x-2">
								<BsPersonFill className="text-sm" />
								<p>Mi perfil</p>
							</div>
							<h1 className="text-text-white md:text-6xl text-4xl mt-5 font-extrabold">{`${userData.firstName} ${userData.lastName}`}</h1>
						</div>
					</div>

					<div className="container py-24 px-8">
						
						
					</div>
				</div>
			</div>
		);
	}
}