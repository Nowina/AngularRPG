import { ItemStatus } from '../enums/item-status';
import { ItemType } from '../enums/item-type';

export abstract class Item {
    public name: string;
    public durability: number;
    public status: ItemStatus;
    public level: number;
    public type: ItemType;
}


