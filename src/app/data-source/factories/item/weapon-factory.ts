import { ItemFactory } from './item-factory';
import { itemType, Weapon } from 'src/app/models/item';

export class WeaponFactory extends ItemFactory{
    constructor(){
        super(itemType.Weapon);
    }

    public create( name :string, level : number,damage : number,range : number) : Weapon{
        let newItem = new Weapon;
        this.fillBaseItemData(newItem,name,level);
        newItem.damage = damage;
        newItem.range = range;
        return newItem;
    }
}