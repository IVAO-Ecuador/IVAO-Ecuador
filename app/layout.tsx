'use client'
import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { useEffect } from 'react';

export const metadata = {
	title: 'IVAO Ecuador',
	description: `Disfruta de la simulación de vuelo en Ecuador con la comunidad de IVAO. Explora nuestros eventos, 
  controla el tráfico aéreo, participa en vuelos virtuales y conéctate con entusiastas de la aviación en Ecuador. 
  ¡Vive la emoción de volar en un entorno virtual realista con IVAO Ecuador!`,

}

const pageFont = Nunito_Sans({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

export default function RootLayout({ children, }: { children: any }) {

	return (
		<html lang="en">
			<link rel="icon" href="/logos/logo-ivao.png" sizes="any" />
			<body className={`${pageFont.className} `}>
				<main>
					{/* @ts-ignore*/}
					<MantineProvider theme={{ fontFamily: pageFont }}>
						{children}
					</MantineProvider>
				</main>
				<footer></footer>
			</body>
		</html>
	)
}