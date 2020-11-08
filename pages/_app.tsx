//types
import type { AppProps } from 'next/app'

//imports
import {CartContext} from '../contexts/cartContext'
import { AnimatePresence , AnimateSharedLayout} from "framer-motion"
import Header from '../components/header'
import Footer from '../components/footer'
//styles
import '../styles/style.scss'

function MyApp({ Component, pageProps, router } : AppProps) {
  return(
    <CartContext.Provider value={{CartItems : []}}>

		<Header/>
		
		<AnimateSharedLayout>
			<AnimatePresence exitBeforeEnter>

				<Component {...pageProps} key={router.route} />

			</AnimatePresence>
		</AnimateSharedLayout>

		<Footer/>
		

    </CartContext.Provider>
  ) 
}

export default MyApp
