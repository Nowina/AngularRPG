import { Item } from '../models/item/item';
import { ItemType } from '../models/enums/item-type';
export class Utilitis {
    public calculateItemWeight(item: Item): number {
        switch (item.type) {
            case ItemType.Backpack:
                return item.level * 10;
                break;

            case ItemType.Weapon:
                return item.level * 15;
                break;

            case ItemType.ClothingPart:
                return item.level * 5;
                break;
        }
    }
}
