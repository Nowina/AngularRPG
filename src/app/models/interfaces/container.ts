import { Item } from '../item/item';

export interface IContainer {
    items: Item[];
    maxCapacity: number;
    currentCapacity: number;
}