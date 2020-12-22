import HeaderLink from '@/components/header/header-link';
import css from './nav.module.scss';

import { ShoppingCart } from 'react-feather';

interface INavProps {
	isOpen: boolean;
}

const Header = ({ isOpen }: INavProps): JSX.Element => {
	return (
		<div className={`${css.nav} ${isOpen ? css.nav_show : ''}`}>
			<nav className={css.inner}>
				<HeaderLink href="/">Home</HeaderLink>
				<HeaderLink href="/collection">Collection</HeaderLink>
				<HeaderLink href="/drawing">Drawing</HeaderLink>
				<div className={css.separator}></div>
				<HeaderLink href="/cart">
					<ShoppingCart size={16} style={{ margin: '0 2px 0 0' }} />
				</HeaderLink>
			</nav>
		</div>
	);
};

export default Header;
