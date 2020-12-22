import Link from 'next/link';
import { ReactNode } from 'react';
import css from './header-link.module.scss';
import { useRouter } from 'next/router';

interface IHeaderLinkProps {
	children: ReactNode;
	href: string;
}

const HeaderLink = ({ children, href }: IHeaderLinkProps): JSX.Element => {
	const router = useRouter();

	const isActive = router.pathname === href;
	const className = `${css.link} ${isActive ? css.active : ''}`;

	return (
		<Link href={href}>
			<a className={className}>{children}</a>
		</Link>
	);
};

export default HeaderLink;
