//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

const Cart = (): JSX.Element => (
	<>
		<Head>
			<title>Cart</title>
			<meta name="description" content=""></meta>
		</Head>
		<motion.div initial="initial" animate="animate" exit="exit" key="Cart" className="Cart">
			<div></div>
		</motion.div>
	</>
);

export default Cart;
