//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

const Page404 = (): JSX.Element => (
	<>
		<Head>
			<title>404</title>
			<meta name="description" content=""></meta>
		</Head>
		<motion.div initial="initial" animate="animate" exit="exit" key="Page404" className="Page404">
			<div>404 : not found</div>
		</motion.div>
	</>
);

export default Page404;
