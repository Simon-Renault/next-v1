//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';
import css from './index.module.scss';
import React from 'react';
import Img from '@/components/image/image';

const Home = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content=""></meta>
			</Head>
			<motion.div initial="initial" animate="animate" exit="exit" key="Home" className={css.index}>
				<Img
					alt="Cover image showing a detailed elephant drawing"
					className={css.hero_image}
					src="https://simonr.s3.eu-west-2.amazonaws.com/elephant.jpeg"
				/>
			</motion.div>
		</>
	);
};

export default Home;
