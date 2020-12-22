import css from './menu-burger.module.scss';
import { Menu, X } from 'react-feather';

interface IMenuBurgerProps {
	onClick: () => void;
	isOpen: boolean;
}

const MenuBurger = ({ onClick, isOpen }: IMenuBurgerProps): JSX.Element => {
	return (
		<button className={css.burger} onClick={() => onClick()}>
			{isOpen && <X size={18} />}
			{!isOpen && <Menu size={18} />}
		</button>
	);
};

export default MenuBurger;
