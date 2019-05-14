import { ItemType } from '../enums/item-type';
import { IEquipable } from './equipable';
import { IContainer } from './container';

export interface IEquipment {
    filledSlots: Set<ItemType>;
    maxLoad: number;
    currentLoad: number;
    items: IEquipable[];
    container: IContainer;
}