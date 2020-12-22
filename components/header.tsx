import HeaderLink from '@/components/header-link';
import Link from 'next/link';
import css from './header.module.scss';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import { ShoppingCart } from 'react-feather';
import MenuBurger from '@/components/menu-burger';

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

const MobileMenuVariants = {
	initial: {
		opacity: 0,
		transition,
	},
	animate: {
		opacity: 1,
		transition,
	},
	exit: {
		opacity: 0,
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

					<nav className={css.nav}>
						<AnimateSharedLayout>
							<HeaderLink href="/">Home</HeaderLink>
							<HeaderLink href="/collection">Collection</HeaderLink>
							<HeaderLink href="/drawing">Drawing</HeaderLink>
							<div className={css.separator}></div>
							<HeaderLink href="/cart">
								<ShoppingCart size={16} style={{ margin: '0 2px 0 0' }} />
							</HeaderLink>
						</AnimateSharedLayout>
					</nav>
				</div>
			</motion.header>
			<AnimatePresence>
				{isNavOpen && (
					<motion.div
						variants={MobileMenuVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className={css.mobile_nav}
					></motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
