import { ItemType } from '../enums/item-type';
import { ItemStatus } from '../enums/item-status';

export interface IEquipable {
    type: ItemType;
    status: ItemStatus;
    isEquipped: boolean;
    weight: number;
}