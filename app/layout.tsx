'use client'

import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { Menu } from '@/components/navigation/Menu';

const pageFont = Nunito_Sans({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

export default function RootLayout({ children, }: { children: any }) {

	return (
		<html lang="en">
			<link rel="icon" href="/logos/logo-ivao.png" sizes="any" />
			<body className={`${pageFont.className} bg-degrade-purple`}>
				{/* @ts-ignore*/}
				<MantineProvider theme={{ fontFamily: pageFont }}>
					<header className='border-b-2 border-menu'>
						<Menu></Menu>
					</header>
					<main>
						{children}
					</main>
					<footer></footer>
				</MantineProvider>
			</body>
		</html>
	)
}