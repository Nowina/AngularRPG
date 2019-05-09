import { ItemStatus } from '../enums/item-status';
import { ItemType } from '../enums/item-type';
import { IPickable } from '../interfaces/pickable';
import { Hero } from '../hero/hero';

export abstract class Item implements IPickable {
    public pickFlag: boolean;
    public owner: Hero;
    public isEquipped: boolean;
    public weight: number;
    public name: string;
    public durability: number;
    public status: ItemStatus;
    public level: number;
    public type: ItemType;
}


