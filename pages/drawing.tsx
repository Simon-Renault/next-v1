//libraries
import { motion } from 'framer-motion';
('');
import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Drawing</title>
			</Head>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				key="Drawing"
				className="Drawing"
			></motion.div>
		</>
	);
}
