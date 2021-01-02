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
							corporis repellendus, dignissimos sunt aliquid quo! Veritatis aspernatur quisquam doloribus
							laudantium dolorem tempore, nobis dolores, dolor numquam corporis similique perspiciatis.
							Perferendis nostr
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
								src="https://simonr.s3.eu-west-2.amazonaws.com/tower2.jpg"
							/>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '100%',
								}}
								src="https://simonr.s3.eu-west-2.amazonaws.com/beast.jpg"
							/>
						</div>
						<div className={css.col}>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '120%',
								}}
								src="https://simonr.s3.eu-west-2.amazonaws.com/tree.jpg"
							/>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '170%',
								}}
								src="https://simonr.s3.eu-west-2.amazonaws.com/flying.jpg"
							/>
						</div>
						<div className={css.col}>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '160%',
								}}
								src="https://simonr.s3.eu-west-2.amazonaws.com/farm_1.jpg"
							/>
							<Img
								alt="Cover image showing a detailed elephant drawing"
								style={{
									paddingBottom: '100%',
								}}
								src="https://simonr.s3.eu-west-2.amazonaws.com/top.jpeg"
							/>
						</div>
					</div>
					<div className="collections"></div>
					<div className={css.text_center}>
						<h2>A large title</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet harum voluptatibus dolorem
							corporis repellendus, dignissimos sunt aliquid quo! Veritatis aspernatur quisquam doloribus
							laudantium dolorem tempore, nobis dolores, dolor numquam corporis similique perspiciatis.
							Perferendis nostr
						</p>
					</div>
					<div className="prints"></div>
				</main>
			</motion.div>
		</>
	);
};

export default Home;
