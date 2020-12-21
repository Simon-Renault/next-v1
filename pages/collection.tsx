//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

const Collection = (): JSX.Element => (
	<>
		<Head>
			<title>Collection</title>
			<meta name="description" content=""></meta>
		</Head>
		<motion.div initial="initial" animate="animate" exit="exit" key="Collection" className="Collection">
			<div></div>
		</motion.div>
	</>
);

export default Collection;
