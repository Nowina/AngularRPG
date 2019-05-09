import { Repository } from './repository';
import { Item } from 'src/app/models/item/item';
import { ItemType } from 'src/app/models/enums/item-type';
import { Backpack } from 'src/app/models/item/backpack.item';
import { Weapon } from 'src/app/models/item/weapon.item';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';

export class ItemRepository extends Repository<Item>{

    constructor() {
        super();
    }

    public getBackpacks(): Backpack[] {
        return this.items.filter(s => s.type == ItemType.Backpack) as Backpack[];
    }

    public getWeapons(): Weapon[] {
        return this.items.filter(s => s.type == ItemType.Weapon) as Weapon[];
    }

    public getClothingParts(): ClothingPart[] {
        return this.items.filter(s => s.type == ItemType.ClothingPart) as ClothingPart[];
    }

}