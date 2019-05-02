import { ItemFactory } from './item.factory';
import { ItemType } from 'src/app/models/enums/item-type';
import { Backpack } from 'src/app/models/item/backpack.item';


export class BackpackFactory extends ItemFactory{
    constructor(){
        super(ItemType.Backpack);
    }

    public create( name :string, level : number) : Backpack{
        let newItem = new Backpack;
        this.fillBaseItemData(newItem, name, level);
        newItem.capacity = level*3;
        newItem.isEquipped = false;
        return newItem;
    }
}