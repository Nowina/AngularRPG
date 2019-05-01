import { itemType, Item, itemStatus } from 'src/app/models/item';

export abstract class ItemFactory{
    private itemType : itemType;
    constructor(itemType:itemType){
        this.itemType = itemType;
    }

    protected fillBaseItemData(item : Item,weight : number, name :string, level : number) : void{
        item.weight = weight;
        item.name = name;
        item.level = level;
        item.durability = 100;
        item.status = itemStatus.Active;
        item.type = this.itemType;
    }

}