import Link from 'next/link';
import css from './header.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { ReactNode, useEffect, useState } from 'react';
import MenuBurger from '@/components/header/menu-burger';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import HeaderLink from '@/components/header/header-link';
import useLockBodyScroll from '@/hooks/lockBodyScroll';

// Interfaces and types
interface IHeaderProps {
	children: ReactNode;
}

// Framer motion definitions
const transition = {
	duration: 0.1,
};
const variants = {
	initial: {
		boxShadow: '0 0px 0px 0 hsla(0,0%,56.9%,0.0)',
		transition,
	},
	animate: {
		boxShadow: '0 1px 30px 0 hsla(0,0%,56.9%,0.2)',
		transition,
	},
};

const overlayVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const mobileVariants = {
	initial: {
		opacity: 0,
		y: -100,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

const Header = ({ children }: IHeaderProps): JSX.Element => {
	//state
	const router = useRouter();
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isNavOpen, toggleNav] = useState(false);
	const isMobile = useMediaQuery({
		query: '(min-device-width: 800px)',
	});

	//Effects
	useEffect(() => {
		if (isMobile) toggleNav(false);
	}, [isMobile]);

	useEffect(() => {
		toggleNav(false);
	}, [router.pathname]);

	//Hooks
	useLockBodyScroll(isNavOpen && !isMobile);

	useScrollPosition(
		({ currPos }) => {
			setHasScrolled(currPos.y <= -300);
		},
		[setHasScrolled]
	);

	//Render
	return (
		<>
			<motion.header
				className={css.header}
				variants={variants}
				initial={`closed`}
				animate={hasScrolled && !isNavOpen ? `animate` : `initial`}
			>
				<div className={css.inner}>
					<Link href="/">
						<a className={css.title_container}>
							<div className={css.logo}></div>
							<div className={css.title}>Simon Renault</div>
						</a>
					</Link>
					<MenuBurger isOpen={isNavOpen} onClick={() => toggleNav(!isNavOpen)} />
					<div className={css.nav}>{children}</div>
				</div>
				<AnimatePresence>
					{isNavOpen && (
						<motion.div
							key="mobileNav"
							variants={overlayVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ easing: 'in', duration: 0.3, delay: 0.25 }}
							className={css.overlay}
							onClick={() => {
								toggleNav(false);
							}}
						>
							<motion.div
								variants={mobileVariants}
								transition={{ type: 'spring', duration: 0.3, delay: 0.25 }}
								className={css.nav_mobile}
							>
								{children}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.header>
		</>
	);
};

const Separator = (): JSX.Element => <div className={css.separator}></div>;

export default Header;

export { HeaderLink, Separator };
