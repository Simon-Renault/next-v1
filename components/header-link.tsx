import Link from 'next/link'
import { ReactNode } from 'react'
import css from "./header-link.module.scss"

interface IHeaderLinkProps {
	children: ReactNode,
	href: string
}

const HeaderLink = ({children,href}: IHeaderLinkProps): JSX.Element => {
	
	return (
		<Link href={href}>
			<a className={css.link}>{children}</a>
		</Link>
	)
}

export default HeaderLink