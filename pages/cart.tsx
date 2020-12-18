//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Cart(): JSX.Element {
	return (
		<>
			<Head>
				<title>Cart</title>
				<meta name="description" content=""></meta>
			</Head>
			<motion.div initial="initial" animate="animate" exit="exit" key="Cart" className="Cart">
				
			</motion.div>
		</>
	);
}
