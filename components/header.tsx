
import HeaderLink from '@/components/header-link'
import Link from 'next/link'
import MenuBurger from '@/components/MenuBurger'
import { motion,useCycle } from 'framer-motion';


const Header = (): JSX.Element => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex flex-row h-20 p-5 bg-white border-b border-gray-100">

			<div className="flex flex-row items-center justify-between w-full m-auto transition-all md:max-w-6xl">

				<Link href="/">
					<a className="flex flex-row items-center justify-center">
						<div className="w-10 h-10 mr-3 bg-center bg-contain rounded-full bg-logo"></div>
						<div className="font-sans text-sm font-medium uppercase">Simon Renault</div>
					</a>
				</Link>

				<motion.div  initial={false} animate={isOpen ? "open" : "closed"} className="flex h-full p-2 rounded cursor-pointer hover:bg-gray-50 md:hidden">

					<MenuBurger toggle={() => toggleOpen()}/>
				</motion.div>

				<nav className="fixed left-0 right-0 flex-col hidden p-5 bg-white border-b border-gray-100 md:flex top-20 md:static md:border-b-0 md:flex-row md:p-0">
					<HeaderLink href="/">Home</HeaderLink>
					<HeaderLink href="/collection">Collection</HeaderLink>
					<HeaderLink href="/drawing">Drawing</HeaderLink>
				</nav>

			</div>

		</header>
	)
}


export default Header