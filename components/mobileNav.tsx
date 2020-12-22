import css from './mobile-nav.module.scss';
import { motion } from 'framer-motion';
import useLockBodyScroll from '@/hooks/lockBodyScroll';
const transition = {
	duration: 0.1,
	ease: [0.17, 0.67, 0.83, 0.67],
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

const MobileNav = (): JSX.Element => {
	useLockBodyScroll();
	return (
		<motion.div variants={MobileMenuVariants} initial="initial" animate="animate" exit="exit" className={css.nav}>
			<motion.div className={css.inner}></motion.div>
		</motion.div>
	);
};

export default MobileNav;
