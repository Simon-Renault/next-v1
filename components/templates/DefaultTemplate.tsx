import { ReactNode } from 'react';
import css from './DefaultTemplate.module.scss';
import { motion } from 'framer-motion';

interface IPageProps {
	key: string;
	children: ReactNode;
}

const DefaultTemplate = ({ key, children }: IPageProps): JSX.Element => <div className={css.default}>{children}</div>;

export default DefaultTemplate;
