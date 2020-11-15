//libraries
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/layout';
import Head from 'next/head';

export default function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				key="About"
				className="About"
			>
				<Layout.Centered>
					<h1>About</h1>
				</Layout.Centered>
			</motion.div>
		</>
	);
}
