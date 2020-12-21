import HeaderLink from '@/components/header-link';
import Link from 'next/link';
import css from './header.module.scss';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

const transition = {
	duration: 0.2,
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
	//const [isScrollingUp, setScrollingUp] = useState(false);

	useScrollPosition(
		({ currPos }) => {
			setHasScrolled(currPos.y <= -300);
		},
		[setHasScrolled]
	);

	return (
		<motion.header
			className={css.header}
			variants={variants}
			initial={`closed`}
			animate={hasScrolled ? `animate` : `initial`}
		>
			<div className={css.inner}>
				<Link href="/">
					<a className="">
						<div className=""></div>
						<div className="">Simon Renault</div>
					</a>
				</Link>

				<div className=""></div>

				<nav className="">
					<AnimateSharedLayout>
						<HeaderLink href="/">Home</HeaderLink>
						<HeaderLink href="/collection">Collection</HeaderLink>
						<HeaderLink href="/test">Test</HeaderLink>
						<HeaderLink href="/drawing">Drawing</HeaderLink>
					</AnimateSharedLayout>
				</nav>
			</div>
		</motion.header>
	);
};

export default Header;
