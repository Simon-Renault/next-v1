import { motion } from 'framer-motion';
('');
import Head from 'next/head';

export default function Page404(): JSX.Element {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				key="P404"
				className="P404"
			>
				404
			</motion.div>
		</>
	);
}
