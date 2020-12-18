//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Collection(): JSX.Element {
	return (
		<>
			<Head>
				<title>Collection</title>
				<meta name="description" content=""></meta>
			</Head>
			<motion.div initial="initial" animate="animate" exit="exit" key="Collection" className="Collection">
				
			</motion.div>
		</>
	);
}
