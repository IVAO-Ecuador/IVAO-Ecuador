'use client'

export const metadata = {
	title: 'IVAO Ecuador',
	description: `Disfruta de la simulación de vuelo en Ecuador con la comunidad de IVAO. Explora nuestros eventos, 
  controla el tráfico aéreo, participa en vuelos virtuales y conéctate con entusiastas de la aviación en Ecuador. 
  ¡Vive la emoción de volar en un entorno virtual realista con IVAO Ecuador!`,

}
import Menu from '@/components/navigation/Menu'
import '../styles/globals.css'

import { Nunito_Sans } from 'next/font/google'
import { AuthProvider } from '../components/auth'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const pageFont = Nunito_Sans({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

const queryClient = new QueryClient();

export default function RootLayout({ children, }: { children: any }) {
	return (
		<html lang="en">
			<link rel="icon" href="/logos/logo-ivao.png" sizes="any" />
			<body className={`${pageFont.className} `}>
				<main>
					<QueryClientProvider client={queryClient}>
						<BrowserRouter>
							<AuthProvider>
								{children}
							</AuthProvider>
						</BrowserRouter>
					</QueryClientProvider>
				</main>
				<footer></footer>
			</body>
		</html>
	)
}