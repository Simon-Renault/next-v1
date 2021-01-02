//types
import type { AppProps } from 'next/app';

//imports
import { CartContext } from '@/contexts/cartContext';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Header, { HeaderLink, Separator } from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { ShoppingCart } from 'react-feather';

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
			<Header>
				<HeaderLink href="/">Home</HeaderLink>
				<HeaderLink href="/collection">Collection</HeaderLink>
				<HeaderLink href="/drawing">Drawing</HeaderLink>
				<Separator />
				<HeaderLink href="/cart">
					<ShoppingCart size={16} style={{ margin: '0 2px 0 0' }} />
				</HeaderLink>
			</Header>

			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</AnimateSharedLayout>

			<Footer />
		</CartContext.Provider>
	);
}

export default MyApp;
