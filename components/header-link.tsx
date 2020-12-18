import Link from 'next/link'
import { ReactNode } from 'react'

interface IHeaderLinkProps {
	children: ReactNode,
	href: string
}

const HeaderLink = ({children,href}: IHeaderLinkProps): JSX.Element => {
	
	return (
		<Link href={href}>
			<a className="p-3 mb-2 font-sans text-sm uppercase rounded hover:bg-gray-50 md:ml-2 md:mb-0">{children}</a>
		</Link>
	)
}

export default HeaderLink