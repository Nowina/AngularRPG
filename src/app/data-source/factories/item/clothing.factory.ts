import { ItemFactory } from './item.factory';
import { ItemType } from 'src/app/models/enums/item-type';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';

import { Injectable } from '@angular/core';
@Injectable()
export class ClothingFactory extends ItemFactory {
    constructor() {
        super(ItemType.ClothingPart);
    }

    public create(name: string, level: number, armor: number, camouflageFactor: number): ClothingPart {
        let newItem = new ClothingPart;
        this.fillBaseItemData(newItem, name, level);
        newItem.pickFlag = true;
        newItem.armor = armor
        newItem.camouflageFactor = camouflageFactor;
        newItem.pickFlag = true;
        return newItem;
    }
}