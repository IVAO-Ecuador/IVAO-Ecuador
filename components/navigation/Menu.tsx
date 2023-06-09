import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

import {
	createStyles, Header, HoverCard, Group, UnstyledButton,
	Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger,
	Drawer, Collapse, ScrollArea, rem,
} from '@mantine/core';

import { FiChevronDown, FiLoader, FiX } from "react-icons/fi";
import { RiTranslate2 } from 'react-icons/ri';
import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { infoMenu } from './infoMenu';
import { signIn, signOut, useSession } from 'next-auth/react';
import { BsArrowRight } from 'react-icons/bs';
import { getUserData } from '@/auth/components/userData';
import { IUser } from "@/auth/types/user";
import { useGlobalContext } from '@/app/context/transalation';
import { translations } from '../translation/translations';


const useStyles = createStyles((theme) => ({
	link: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		justifyContent: 'space-between',
		textDecoration: 'none',
		color: '#d2d3e0bf',
		fontWeight: 500,
		fontSize: theme.fontSizes.md,

		[theme.fn.smallerThan('sm')]: {
			height: rem(42),
			display: 'flex',
			alignItems: 'center',
			width: '100%',
		},
	},

	subLink: {
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor: '#37384b42',
		}),

		'&:active': theme.activeStyles,
	},

	dropdownFooter: {
		backgroundColor: '#1D1E2B',
		margin: `calc(${theme.spacing.md} * -1)`,
		marginTop: theme.spacing.md,
		padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
		paddingBottom: theme.spacing.xl,
		borderTop: '2px solid #21232E',
	},

	hiddenMobile: {
		[theme.fn.smallerThan('lg')]: {
			display: 'none',
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan('lg')]: {
			display: 'none',
		},
	},
}));


export function Menu() {

	const { status } = useSession();
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const [eventAlert, setEventAlert] = useState(true);
	const [userData, setUserData] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState<Boolean>(true)
	const { selectedLanguage, setSelectedLanguage } = useGlobalContext();


	const { classes } = useStyles();
	const [linksOpened, setLinksOpened] = useState({
		division: false,
		pilotos: false,
		controladores: false,
		recursos: false,
	});

	useEffect(() => {

		const refreshData = async () => {
			const result = await getUserData();

			if (result.message == 'Forbidden') {
				signOut()
			} else {
				setUserData(result);
				setIsLoading(false)
			}

		};

		if (status === 'authenticated') {
			refreshData();
		} else {
			setIsLoading(false)
		}


	}, [status]);

	const closeEventAlert = () => {
		setEventAlert(false);
	}

	const handleLanguageSelection = () => {
		(selectedLanguage == 'Español') ? setSelectedLanguage('English') : setSelectedLanguage('Español');;
	};

	const handleToggle = (key: any) => {
		setLinksOpened((prevState) => ({
			...prevState,
			//@ts-ignore
			[key]: !prevState[key],
		}));
	};

	const generateSubMenu = (menu: string) => {

		let menuSelected: any;

		switch (menu) {
			case 'division': menuSelected = infoMenu.division; break;
			case 'pilotos': menuSelected = infoMenu.pilotos; break;
			case 'controladores': menuSelected = infoMenu.controladores; break;
			case 'recursos': menuSelected = infoMenu.recursos; break;
		}

		return menuSelected.map((item: any) => (
			<Link key={item.title[selectedLanguage]} href={item.url} target={item.newTab ? '_blank' : '_self'}>
				<UnstyledButton className={classes.subLink} key={item.title}>
					<Group noWrap align="flex-start">
						<ThemeIcon size={46} className={`${item.iconBackground} border-none rounded-md`} >
							<item.icon size={rem(22)} color={'#fff'} />
						</ThemeIcon>
						<div>
							<Text className='text-[16px] text-text-white' fw={500}>
								{item.title[selectedLanguage]}
							</Text>
							<Text className='text-[14px]' color="dimmed">
								{item.description[selectedLanguage]}
							</Text>
						</div>
					</Group>
				</UnstyledButton>
			</Link>
		))
	}

	if (isLoading) {
		return (
			<div className='container p-5 flex gap-x-5'>
				<div className='bg-gray w-1/5 h-14 rounded-xl opacity-20 skeleton-animation'></div>
				<div className='bg-gray w-3/5 h-14 rounded-xl opacity-20 skeleton-animation'></div>
				<div className='bg-gray w-1/5 h-14 rounded-xl opacity-20 skeleton-animation'></div>
			</div>
		);
	}

	return (
		<Box>
			<Header height={105} px="md" bg={'none'} className='border-none'>
				<Group position="apart" sx={{ height: '100%' }} className='container'>

					<Link href={'/'}>
						<Image
							src={'/logos/logo-complete.png'}
							width={270}
							height={30}
							alt='Logo de IVAO Ecuador'
						></Image>
					</Link>


					<Group sx={{ height: '100%', width: '45%', justifyContent: 'space-between' }} spacing={0} className={classes.hiddenMobile}>
						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											{/*@ts-ignore*/}
											{translations[selectedLanguage]?.division}
										</Box>
										<FiChevronDown size={16} color={'#d2d3e0bf'} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden', backgroundColor: '#1D1E2B', border: 'none' }} className='!w-96 !top-[90px]'>
								<SimpleGrid cols={1} spacing={10}>
									{generateSubMenu('division')}
								</SimpleGrid>
							</HoverCard.Dropdown>
						</HoverCard>

						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											{/*@ts-ignore*/}
											{translations[selectedLanguage]?.pilots}
										</Box>
										<FiChevronDown size={16} color={'#d2d3e0bf'} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden', backgroundColor: '#1D1E2B', border: 'none' }} className='!w-96 !top-[90px]'>
								<SimpleGrid cols={1} spacing={10}>
									{generateSubMenu('pilotos')}
								</SimpleGrid>
							</HoverCard.Dropdown>
						</HoverCard>

						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											{/*@ts-ignore*/}
											{translations[selectedLanguage]?.controllers}
										</Box>
										<FiChevronDown size={16} color={'#d2d3e0bf'} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden', backgroundColor: '#1D1E2B', border: 'none' }} className='!w-96 !top-[90px]'>
								<SimpleGrid cols={1} spacing={10}>
									{generateSubMenu('controladores')}
								</SimpleGrid>
							</HoverCard.Dropdown>
						</HoverCard>

						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											{/*@ts-ignore*/}
											{translations[selectedLanguage]?.resources}
										</Box>
										<FiChevronDown size={16} color={'#d2d3e0bf'} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden', backgroundColor: '#1D1E2B', border: 'none' }} className='!w-96 !top-[90px]'>
								<SimpleGrid cols={1} spacing={10}>
									{generateSubMenu('recursos')}
								</SimpleGrid>
								<div className={classes.dropdownFooter}>
									<Group position="apart">
										<div>
											<Text fw={500} fz="sm" className='text-text-white text-[15px]'>
												{/*@ts-ignore*/}
												{translations[selectedLanguage]?.forum_label}
											</Text>
											<Text size="xs" color="dimmed" className='text-text-color text-[14px]'>
												{/*@ts-ignore*/}
												{translations[selectedLanguage]?.forum_text}
											</Text>
										</div>
										{/*@ts-ignore*/}
										<Link href={'https://ec.forum.ivao.aero/'} target='_blank' className='bg-main-purple border-none text-text-white px-4 py-2 rounded-[5px] transition-all hover:translate-x-0.5 hover:-translate-y-0.5'>{translations[selectedLanguage]?.go_forum}</Link>
									</Group>
								</div>
							</HoverCard.Dropdown>
						</HoverCard>

					</Group>

					<Group className={classes.hiddenMobile}>
						<div className='border p-2 rounded-md opacity-40 cursor-pointer text-text-color' onClick={handleLanguageSelection}>
							<RiTranslate2 className='text-xl'></RiTranslate2>
						</div>
						{status == 'unauthenticated' ? (
							<button className='bg-main-green text-text-white px-5 py-2 rounded-md' onClick={() => signIn("ivao")}>
								{/*@ts-ignore*/}
								{translations[selectedLanguage]?.login_button}
							</button>
						) : (
							<>
								<Link href={'/profile'} className='bg-main-purple text-text-white px-5 py-2 rounded-md'>{userData?.publicNickname}</Link>
								<div className='border p-2 rounded-md opacity-40 cursor-pointer text-text-color' onClick={() => signOut()}>
									<BsArrowRight className='text-xl'></BsArrowRight>
								</div>
							</>
						)}

					</Group>

					<Burger opened={drawerOpened} onClick={toggleDrawer} className={`${classes.hiddenDesktop} max-md:mr-5`} color='#fff' />
				</Group>
			</Header>

			{eventAlert && (
				<div className='bg-pink py-[10px] flex z-50 max-sm:mt-6 max-md:hidden'>
					<div className='container max-lg:px-8 sm:flex block lg:justify-around justify-between items-center text-text-white'>
						<Link href={status == 'authenticated' ? '/profile' : '#'} className='sm:w-5/6'>
							<div className='flex gap-x-4 items-center max-sm:text-center'>
								<FiLoader className='max-lg:hidden'></FiLoader>
								{/*@ts-ignore*/}
								<p className='text-[15px] max-md:mr-5'>{translations[selectedLanguage]?.announcement} - {status == 'authenticated' ? translations[selectedLanguage]?.announcement_status_logged_in : translations[selectedLanguage]?.announcement_status}</p>
							</div>
						</Link>
						<FiX className='cursor-pointer max-sm:hidden' onClick={closeEventAlert}></FiX>
					</div>
				</div>
			)}

			{/*@ts-ignore*/}
			<Drawer title={translations[selectedLanguage]?.navigation_menu}
				opened={drawerOpened}
				onClose={closeDrawer}
				size="85%"
				padding="xl"
				className={classes.hiddenDesktop}
				zIndex={1000000}

			>
				<ScrollArea h={`calc(100vh - ${rem(120)})`} mx="-md" px={'40px'} >
					<Divider my="sm" color='#21232E' w={'100%'} />

					<UnstyledButton className={`${classes.link} mb-8 mt-5`} onClick={() => handleToggle('division')}>
						<Center inline>
							<Box component="span" mr={5}>
								{/*@ts-ignore*/}
								{translations[selectedLanguage]?.division}
							</Box>
							<FiChevronDown size={16} color={'#d2d3e0bf'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened['division']}>{generateSubMenu('division')}</Collapse>


					<UnstyledButton className={`${classes.link} mb-8 mt-5`} onClick={() => handleToggle('pilotos')}>
						<Center inline>
							<Box component="span" mr={5}>
								{/*@ts-ignore*/}
								{translations[selectedLanguage]?.pilots}
							</Box>
							<FiChevronDown size={16} color={'#d2d3e0bf'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened['pilotos']}>{generateSubMenu('pilotos')}</Collapse>

					<UnstyledButton className={`${classes.link} mb-8 mt-5`} onClick={() => handleToggle('controladores')}>
						<Center inline>
							<Box component="span" mr={5}>
								{/*@ts-ignore*/}
								{translations[selectedLanguage]?.controllers}
							</Box>
							<FiChevronDown size={16} color={'#d2d3e0bf'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened['controladores']}>{generateSubMenu('controladores')}</Collapse>

					<UnstyledButton className={`${classes.link} mb-8 mt-5`} onClick={() => handleToggle('recursos')}>
						<Center inline>
							<Box component="span" mr={5}>
								{/*@ts-ignore*/}
								{translations[selectedLanguage]?.resources}
							</Box>
							<FiChevronDown size={16} color={'#d2d3e0bf'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened['recursos']}>{generateSubMenu('recursos')}</Collapse>

					<Divider my="sm" color='#21232E' />

					<div className='md:flex gap-x-5 justify-center mt-10 flex-wrap'>
						<div onClick={handleLanguageSelection} className='border p-2 rounded-md opacity-40 cursor-pointer text-text-color flex max-md:justify-center max-md:gap-x-5 items-center max-md:mb-3'>
							<RiTranslate2 className='text-xl'></RiTranslate2>
							{/*@ts-ignore*/}
							<p className='md:hidden'>{translations[selectedLanguage]?.translate_page}</p>
						</div>
						{status == 'unauthenticated' ? (
							<>
								{/*@ts-ignore*/}
								<button className='bg-main-green text-text-white px-5 py-2 rounded-md max-md:w-full max-md:mb-3' onClick={() => signIn("ivao")}>{translations[selectedLanguage]?.login_button}</button>
								{/*@ts-ignore*/}
								<Link href={'https://www.ivao.aero/members/person/register.htm'} target='_blank' className='bg-main-purple text-text-white px-5 py-2 rounded-md block text-center max-md:w-full'>{translations[selectedLanguage]?.signin_button}</Link>
							</>

						) : (
							<>
								<Link href={'/profile'}>
									<button className='bg-main-purple text-text-white px-5 py-2 rounded-md max-md:w-full max-md:mb-3'>{userData?.publicNickname}</button>
								</Link>
								<button className='bg-red text-text-white px-5 py-2 rounded-md max-md:w-full max-md:mb-3' onClick={() => signOut()}>Cerrar sesión</button>
							</>
						)}
					</div>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}