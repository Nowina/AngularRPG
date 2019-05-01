import { ItemFactory } from './item-factory';
import { itemType, Weapon, Backpack } from 'src/app/models/item';

export class BackpackFactory extends ItemFactory{
    constructor(){
        super(itemType.Backpack);
    }

    public create( name :string, level : number, weight : number) : Backpack{
        let newItem = new Backpack;
        this.fillBaseItemData(newItem,weight,name,level);
        newItem.capacity = level*5;
        return newItem;
    }
}