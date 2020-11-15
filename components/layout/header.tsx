//components
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<Layout.Centered>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/collection">
					<a>Collections</a>
				</Link>
				<Link href="/drawing">
					<a>Drawings</a>
				</Link>
			</Layout.Centered>
		</header>
	);
}
