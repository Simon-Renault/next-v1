import { createContext } from 'react';

interface ICartItem {
	id: number;
	title: string;
	body: string;
}

export interface ICartItemContext {
	CartItems: ICartItem[];
	length: number;
}

export const cartContextDefaultValue: ICartItemContext = {
	CartItems: [],
	length: 0,
};

export const CartContext = createContext<ICartItemContext>(cartContextDefaultValue);
