import css from './overlay.module.scss';
import { motion } from 'framer-motion';

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
};

const Overlay = (): JSX.Element => {
	return (
		<motion.div
			variants={MobileMenuVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className={css.overlay}
		></motion.div>
	);
};

export default Overlay;
