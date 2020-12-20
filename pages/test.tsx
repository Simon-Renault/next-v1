//libraries
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Test(): JSX.Element {
	return (
		<>
			<Head>
				<title>Test</title>
				<meta name="description" content=""></meta>
			</Head>
			<motion.div initial="initial" animate="animate" exit="exit" key="Test" className="Test">


				<div className="w-full m-auto mb-10 lg:w-4/6 mt-28">

					<div className="flex flex-col mb-20 ml-5 mr-5 ">
						<div className="mb-5 text-sm font-semibold text-gray-500">1 - 12</div>
						<div className="flex flex-row items-baseline ">
							<h1 className="pb-4 font-serif  text-4xl md:text-7xl">The Drawing Name</h1>
							<p className="ml-6 text-xl text-gray-600">2012</p>
						</div>
					</div>

				</div>
				<div className="bg-gray-200 h-80"></div>

				<div className="w-full m-auto mb-10 lg:w-4/6 mt-28">
					
					<div className="ml-5 mr-5">
						<h2 className="pb-5 font-serif text-3xl md:text-4xl ">A Nice Title</h2>
						<h2 className="pb-4 font-serif text-2xl md:text-2xl">A Nice Subtitle</h2>
						<p className="text-base text-gray-600  leading-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem ab placeat iste officia eveniet sit nesciunt laudantium doloribus est possimus perferendis, non, nisi in consequatur, veritatis ipsum ipsam vitae cumque? Perspiciatis, at voluptate et nesciunt, voluptatibus ipsam animi, vitae dolores incidunt obcaecati impedit omnis rerum maiores ut quam tempore. Dicta nostrum delectus sint. Nam voluptate id atque quo necessitatibus non at aliquid. Cupiditate laborum alias cum obcaecati animi totam illo, cumque 
						</p>
					</div>
					
					
				</div>
				
			</motion.div>
		</>
	);
}
