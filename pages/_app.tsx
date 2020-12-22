//types
import type { AppProps } from 'next/app';

//imports
import { CartContext } from '@/contexts/cartContext';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Header from '@/components/header/header';

//styles
import '../styles/style.scss';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	useEffect(() => {
		const removeFouc = (foucElement) => {
			foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
		};
		removeFouc(document.documentElement);
	}, []);

	return (
		<CartContext.Provider
			value={{
				CartItems: [],
				length: 0,
			}}
		>
			<Header />

			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</AnimateSharedLayout>
		</CartContext.Provider>
	);
}

export default MyApp;
