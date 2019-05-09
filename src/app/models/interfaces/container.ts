import { Item } from '../item/item';
import { IPickable } from './pickable';

export interface IContainer {
    items: IPickable[];
    maxCapacity: number;
    currentCapacity: number;
}