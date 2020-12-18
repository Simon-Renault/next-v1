
import HeaderLink from '@/components/header-link'
import Link from 'next/link'

const Header = () : JSX.Element => {
	return (
		<header className="fixed top-0 left-0 right-0 flex flex-row h-20 p-5 bg-white border-b border-gray-100">

				<div className="flex flex-row items-center justify-between w-full m-auto transition-all md:max-w-6xl">

					<Link href="/">
						<a className="flex flex-row items-center justify-center ">
							<div className="w-10 h-10 mr-3 bg-center bg-contain rounded-full bg-logo"></div>
							<div className=" text-sm uppercase">Simon Renault</div>
						</a>
					</Link>
					

					<div className="fixed left-0 right-0 flex flex-col p-5 bg-white border-b border-gray-100 top-20 md:static md:border-b-0 md:flex-row md:p-0">
						<HeaderLink href="/">Home</HeaderLink>
						<HeaderLink href="/Collections">Collections</HeaderLink>
						<HeaderLink href="/Cart">Cart</HeaderLink>
					</div>

				</div>

		</header>
	)
}

export default Header