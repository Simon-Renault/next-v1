import styles from './layout.module.scss';

interface ILayoutProps {
	children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Layout {
	export function Centered({ children }: ILayoutProps): JSX.Element {
		return <div className={styles.centered}>{children}</div>;
	}
}
