import Link from 'next/link';
import css from './header.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import MenuBurger from '@/components/header/menu-burger';
import Overlay from '@/components/header/overlay';
import Nav from '@/components/header/nav';
import MobileNav from '@/components/header/mobile-nav';

const transition = {
	duration: 0.1,
	ease: [0.17, 0.67, 0.83, 0.67],
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

const Header = (): JSX.Element => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isNavOpen, toggleNav] = useState(false);

	useScrollPosition(
		({ currPos }) => {
			setHasScrolled(currPos.y <= -300);
		},
		[setHasScrolled]
	);

	return (
		<>
			<motion.header
				className={css.header}
				variants={variants}
				initial={`closed`}
				animate={hasScrolled ? `animate` : `initial`}
			>
				<div className={css.inner}>
					<Link href="/">
						<a className={css.title_container}>
							<div className={css.logo}></div>
							<div className={css.title}>Simon Renault</div>
						</a>
					</Link>

					<MenuBurger isOpen={isNavOpen} onClick={() => toggleNav(!isNavOpen)} />

					<Nav isOpen={isNavOpen} />
				</div>
			</motion.header>
		</>
	);
};

export default Header;
