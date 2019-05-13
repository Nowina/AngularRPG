import { Item } from '../item/item';
import { IPickable } from './pickable';


export interface IContainer {
    items: IPickable[];
    maxItemsWeight: number;
    currentItemsWeight: number;
}