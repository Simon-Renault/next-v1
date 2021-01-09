import Link from 'next/link';
import { ReactNode } from 'react';
import css from './header-link.module.scss';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface IHeaderLinkProps {
	children: ReactNode;
	href: string;
}

const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

const HeaderLink = ({ children, href }: IHeaderLinkProps): JSX.Element => {
	const router = useRouter();

	const isActive = router.pathname === href;
	const className = `${css.link} ${isActive ? css.active : ''}`;

	return (
		<Link href={href}>
			<a className={className}>
				{children}
				{isActive && (
					<motion.div
						layoutId="bg"
						className={css.bg}
						initial={false}
						animate={{ opacity: 1 }}
						transition={spring}
					/>
				)}
			</a>
		</Link>
	);
};

export default HeaderLink;
