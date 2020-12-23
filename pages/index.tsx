//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';
import Img from '@/components/image/image';

const url = 'https://simonr.s3.eu-west-2.amazonaws.com/elephant.jpeg';

const Home = (): JSX.Element => (
	<>
		<Head>
			<title>Home</title>
			<meta name="description" content=""></meta>
		</Head>
		<motion.div initial="initial" animate="animate" exit="exit" key="Home" className="Home">
			<div style={{ margin: '100px 0 0 100px' }}>
				<Img src={url} />
			</div>
		</motion.div>
	</>
);

export default Home;
