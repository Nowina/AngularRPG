import { ItemFactory } from './item.factory';
import { ItemType } from 'src/app/models/enums/item-type';
import { Backpack } from 'src/app/models/item/backpack.item';


export class BackpackFactory extends ItemFactory {
    constructor() {
        super(ItemType.Backpack);
    }

    public create(name: string, level: number): Backpack {
        let newItem = new Backpack;
        this.fillBaseItemData(newItem, name, level);
        newItem.pickFlag = false;
        newItem.containerWeight = newItem.weight;
        newItem.maxItemsWeight = level * 30;
        newItem.currentItemsWeight = 0;
        newItem.pickFlag = false;
        newItem.items = [];
        return newItem;
    }
}