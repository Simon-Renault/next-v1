//libraries
import { motion } from 'framer-motion';
('');
import { Layout } from '../components/layout/layout';
import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Collection</title>
			</Head>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				key="Collection"
				className="Collection"
			>
				<Layout.Centered>
					<h1>Collection</h1>
				</Layout.Centered>
			</motion.div>
		</>
	);
}
