//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

const Drawing = (): JSX.Element => (
	<>
		<Head>
			<title>Drawing</title>
			<meta name="description" content=""></meta>
		</Head>
		<motion.div initial="initial" animate="animate" exit="exit" key="Drawing" className="Drawing">
			<div></div>
		</motion.div>
	</>
);

export default Drawing;
