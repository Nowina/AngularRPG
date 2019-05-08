import { Utilitis } from 'src/app/utilities/utilities';
import { ItemType } from 'src/app/models/enums/item-type';
import { Item } from 'src/app/models/item/item';
import { ItemStatus } from 'src/app/models/enums/item-status';


export abstract class ItemFactory {
    private utilitis: Utilitis;
    constructor(private itemType: ItemType) {
        this.itemType = itemType;
        this.utilitis = new Utilitis();
    }

    protected fillBaseItemData(item: Item, name: string, level: number): void {
        item.name = name;
        item.level = level;
        item.durability = level * 50;
        item.status = ItemStatus.Active;
        item.type = this.itemType;
        item.weight = this.utilitis.calculateItemWeight(item);
    }

}