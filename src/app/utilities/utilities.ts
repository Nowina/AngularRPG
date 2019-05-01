import { Item, itemType } from '../models/item';

export function getRandomNumber( max :number, min : number = 0): number{
    return Math.floor(min + (max - min)*Math.random());
}

export function calculateItemWeight(item : Item) : number{
    switch (item.type) {
        case itemType.Backpack:
            return item.level*10;
            break;

        case itemType.Weapon:
            return item.level*15;
            break;

        case itemType.ClothingPart:
            return item.level*5;
            break;
    }
}