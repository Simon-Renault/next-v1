//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

const Home = (): JSX.Element => (
	<>
		<Head>
			<title>Home</title>
			<meta name="description" content=""></meta>
		</Head>
		<motion.div initial="initial" animate="animate" exit="exit" key="Home" className="p-5 pt-20 Home" >
			<div className="md:max-w-6xl" >
			
			</div>
		</motion.div>
	</>
);

export default Home