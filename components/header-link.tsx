import Link from 'next/link'
import { ReactNode } from 'react'

interface IHeaderLinkProps {
	children: ReactNode,
	href: string
}

const HeaderLink = ({children,href}: IHeaderLinkProps): JSX.Element => {
	
	return (
		<Link href={href}>
			<a className="h-full p-5 mb-2 font-sans text-sm uppercase rounded md:pl-3 md:pr-3 md:p-2 hover:bg-gray-50 md:ml-2 md:mb-0">{children}</a>
		</Link>
	)
}

export default HeaderLink