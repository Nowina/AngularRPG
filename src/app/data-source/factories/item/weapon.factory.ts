import { ItemFactory } from './item.factory';
import { ItemType } from 'src/app/models/enums/item-type';
import { Weapon } from 'src/app/models/item/weapon.item';

export class WeaponFactory extends ItemFactory {
    constructor() {
        super(ItemType.Weapon);
    }

    public create(name: string, level: number, damage: number, range: number): Weapon {
        let newItem = new Weapon;
        this.fillBaseItemData(newItem, name, level);
        newItem.pickFlag = true;
        newItem.usageFactor = damage;
        newItem.range = range;
        newItem.isEquipped = false;
        return newItem;
    }
}