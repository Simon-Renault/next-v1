//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content=""></meta>
			</Head>
			<motion.div initial="initial" animate="animate" exit="exit" key="Home" className="Home"></motion.div>
		</>
	);
}
