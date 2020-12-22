import css from './mobile-nav.module.scss';

import { motion } from 'framer-motion';

const transition = {
	type: 'spring',
	y: { type: 'spring', stiffness: 300 },
	duration: 0.3,
};

const MobileMenuVariants = {
	initial: {
		y: -100,
		opacity: 0,
		transition,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition,
	},
	exit: {
		y: -100,
		opacity: 1,
		transition,
	},
};

const MobileNav = (): JSX.Element => {
	return (
		<motion.div
			variants={MobileMenuVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className={css.nav}
		></motion.div>
	);
};

export default MobileNav;
