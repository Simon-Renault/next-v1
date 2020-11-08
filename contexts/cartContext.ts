import { createContext } from 'react';

interface ICartItem {
    id: number;
    title: string;
    body: string;
}

export interface ICartItemList {
    CartItems: ICartItem[];
}

export const cartContextDefaultValue: ICartItemList = {
    CartItems: []
}

export const CartContext = createContext<ICartItemList>(cartContextDefaultValue);


