'use client'

import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import Image from 'next/image';
import { BsDiscord, BsFacebook, BsInstagram } from 'react-icons/bs';
import { infoFooter } from './infoFooter';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/context/transalation';
import { translations } from '../translation/translations';

const useStyles = createStyles((theme) => ({
	footer: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`
	},

	logo: {
		maxWidth: rem(250),

		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	description: {
		fontSize: '14px',
		marginTop: rem(5),

		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			textAlign: 'center',
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	groups: {
		display: 'flex',
		flexWrap: 'wrap',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	wrapper: {
		width: rem(160),
	},

	link: {
		display: 'block',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: rem(3),
		paddingBottom: rem(3),

		'&:hover': {
			textDecoration: 'underline',
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: '#FFF'
	},

	afterFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid #afb0bb0a`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	social: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

export function Footer() {
	const { classes } = useStyles();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { selectedLanguage } = useGlobalContext();

	useEffect(() => {
		const loadFooter = () => {
			setIsLoading(false);
		};

		setTimeout(loadFooter, 300);
	}, []);

	let data = infoFooter;

	const groups = data.map((group: any) => {
		const links = group.links.map((link: any, index: any) => (
			<Text<'a'>
				key={index}
				className={classes.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{/*@ts-ignore*/}
				{link.label[selectedLanguage]}
			</Text>
		));

		return (
			<>
				{/*@ts-ignore*/}
				<div className={classes.wrapper} key={group.title[selectedLanguage]}>
					{/*@ts-ignore*/}
					<Text className={classes.title}>{group.title[selectedLanguage]}</Text>
					{links}
				</div>
			</>
		);
	});

	if (isLoading) {
		return (
			<div className='container p-5 '>
				<div className='flex gap-x-5'>
					<div className='bg-gray w-2/5 h-32 rounded-xl opacity-20 skeleton-animation'></div>
					<div className='bg-gray w-3/5 h-32 rounded-xl opacity-20 skeleton-animation'></div>
				</div>
				<div className='bg-gray w-full h-16 rounded-xl opacity-20 skeleton-animation mt-5'></div>
			</div>

		)
	}

	return (
		<footer className={`${classes.footer}`}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Image src={'/logos/logo-complete.png'} width={270} height={30} alt='Logo IVAO Ecuador' className='-ml-9'></Image>
					<Text size="xs" color="dimmed" className={classes.description}>
						{/*@ts-ignore*/}
						{translations[selectedLanguage]?.footer_text}
					</Text>
				</div>
				<div className={classes.groups}>
					{groups}
				</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm" className='max-md:text-center'>
					{/*@ts-ignore*/}
					{translations[selectedLanguage]?.footer_disclaimer}
				</Text>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<ActionIcon size="lg">
						<BsInstagram size="1.05rem" />
					</ActionIcon>
					<ActionIcon size="lg">
						<BsFacebook size="1.05rem" />
					</ActionIcon>
					<ActionIcon size="lg">
						<BsDiscord size="1.05rem" />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}