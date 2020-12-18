//types
import type { AppProps } from 'next/app';

//imports
import { CartContext } from '@/contexts/cartContext';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Header from "@/components/header"
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
			
			<Header/>
			

			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} className="pt-20"/>
				</AnimatePresence>
			</AnimateSharedLayout>

			
		</CartContext.Provider>
	);
}

export default MyApp;
