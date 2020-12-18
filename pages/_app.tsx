//types
import type { AppProps } from 'next/app';

//imports
import { CartContext } from '@/contexts/cartContext';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Link from 'next/link'

//styles
import '../styles/style.scss';


function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
		<CartContext.Provider
			value={{
				CartItems: [],
				length: 0,
			}}
		>
			
			<header className="fixed top-0 left-0 right-0 flex flex-row h-20 p-5 bg-white border-b border-gray-100">

				<div className="flex flex-row items-center  justify-between w-full  transition-all ">

					

					<div className="w-10 h-10 bg-gray-200 rounded"></div>

					<div className="fixed left-0 right-0 flex flex-col p-5 bg-white border-b border-gray-100 top-20">
						<Link href="/">
							<a className="p-3 mb-2 rounded hover:bg-gray-50">Test link</a>
						</Link>
						<Link href="/">
							<a className="p-3 mb-2 rounded hover:bg-gray-50">Test link</a>
						</Link>
						<Link href="/">
							<a className="p-3 mb-2 rounded hover:bg-gray-50">Test link</a>
						</Link>
						<Link href="/">
							<a className="p-3 mb-2 rounded hover:bg-gray-50">Test link</a>
						</Link>
					</div>

				</div>

				

			</header>

			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} className="pt-20"/>
				</AnimatePresence>
			</AnimateSharedLayout>

			
		</CartContext.Provider>
	);
}

export default MyApp;
