import { ItemStatus } from '../enums/item-status';
import { ItemType } from '../enums/item-type';
import { IPickable } from '../interfaces/pickable';
import { Hero } from '../hero/hero';
import { IEquipable } from '../interfaces/equipable';

export abstract class Item implements IPickable, IEquipable {
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


