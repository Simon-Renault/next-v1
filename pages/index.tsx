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

				<main id="main" className="main">
					<div className={css.text_center}>
						<h2>A large title</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet harum voluptatibus dolorem
							corporis repellendus, dignissimos sunt aliquid quo! Veritatis aspernatur.
						</p>
						<button>Gallerie</button>
					</div>

					<div className={css.gallery_preview}>
						<div className={css.col}>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '160%',
								}}
								className={css.image}
								src="https://simonr.s3.eu-west-2.amazonaws.com/coffe_shop_full.jpg"
							/>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '100%',
								}}
								className={css.image}
								src="https://simonr.s3.eu-west-2.amazonaws.com/beast.jpg"
							/>
						</div>
						<div className={css.col}>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '120%',
								}}
								className={css.image}
								src="https://simonr.s3.eu-west-2.amazonaws.com/tree.jpg"
							/>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '170%',
								}}
								className={css.image}
								src="https://simonr.s3.eu-west-2.amazonaws.com/flying.jpg"
							/>
						</div>
						<div className={css.col}>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '160%',
								}}
								className={css.image}
								src="https://simonr.s3.eu-west-2.amazonaws.com/farm_1.jpg"
							/>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '100%',
								}}
								className={css.image}
								src="https://simonr.s3.eu-west-2.amazonaws.com/top.jpeg"
							/>
						</div>
					</div>
					<div className={css.collections}></div>
					<div className={css.text_center}>
						<h2>A large title</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet harum voluptatibus dolorem
							corporis repellendus, dignissimos sunt aliquid quo!
						</p>
					</div>
					<div className="prints"></div>
				</main>
			</motion.div>
		</>
	);
};

export default Home;
