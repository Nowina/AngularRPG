import { ItemFactory } from './item-factory';
import { itemType, Weapon, Backpack } from 'src/app/models/item';

export class BackpackFactory extends ItemFactory{
    constructor(){
        super(itemType.Backpack);
    }

    public create( name :string, level : number) : Backpack{
        let newItem = new Backpack;
        this.fillBaseItemData(newItem,name,level);
        newItem.capacity = level*3;
        return newItem;
    }
}