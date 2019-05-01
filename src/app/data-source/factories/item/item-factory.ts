import { itemType, Item, itemStatus } from 'src/app/models/item';
import { calculateItemWeight } from 'src/app/utilities/utilities';

export abstract class ItemFactory{
    private itemType : itemType;
    constructor(itemType: itemType){
        this.itemType = itemType;
    }

    protected fillBaseItemData(item : Item, name :string, level : number) : void{
        item.name = name;
        item.level = level;
        item.durability = level*50;
        item.status = itemStatus.Active;
        item.type = this.itemType;
        item.weight = calculateItemWeight(item);
    }

}