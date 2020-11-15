//libraries
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/layout';
import Head from 'next/head';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<motion.div
				initial="initial"
				animate="animate"
				exit={{ opacity: 0 }}
				key="Home"
				className="Home"
			>
				<Layout.Centered>
					<h1>Home</h1>
				</Layout.Centered>
			</motion.div>
		</>
	);
}
