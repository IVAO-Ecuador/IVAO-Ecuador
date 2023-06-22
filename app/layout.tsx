'use client'

import '../styles/globals.css'
import { Nunito_Sans } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { Menu } from '@/components/navigation/Menu';
import { Footer} from '@/components/navigation/Footer';
import { infoFooter } from '@/components/navigation/infoFooter';

const pageFont = Nunito_Sans({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

export default function RootLayout({ children, }: { children: any }) {

	return (
		<html lang="en">

			<head>
				<title>IVAO Ecuador</title>
				<meta name="author" content="Santiago Baron Zuleta" />
				<meta name="description" content="Disfruta de la simulación de vuelo en Ecuador con la comunidad de IVAO. 
				Explora nuestros eventos, controla el tráfico aéreo, participa en vuelos virtuales y conéctate con entusiastas de la aviación en Ecuador. 
				¡Vive la emoción de volar en un entorno virtual realista con IVAO Ecuador!" />
				<link rel="icon" href="/logos/logo-ivao.png" sizes="any" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="IVAO, Ecuador, simulación de vuelo, tráfico aéreo, vuelos virtuales, comunidad de aviación" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Language" content="es" />
				<meta name="geo.region" content="EC" />
				<meta name="geo.placename" content="Ecuador" />
				<meta name="geo.position" content="-0.2295;-78.5249" />
				<meta name="ICBM" content="-0.2295, -78.5249" />
			</head>

			<body className={`${pageFont.className} bg-degrade-purple`}>
				{/* @ts-ignore*/}
				<MantineProvider theme={{ fontFamily: pageFont }}>
					<header className='border-menu'>
						<Menu></Menu>
					</header>
					<main>
						{children}
					</main>
					<footer className='bg-degrade-black'>
						<Footer></Footer>
					</footer>
				</MantineProvider>
			</body>
		</html>
	)
}