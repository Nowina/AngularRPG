import { ItemFactory } from './item.factory';
import { ItemType } from 'src/app/models/enums/item-type';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';


export class ClothingFactory extends ItemFactory{
    constructor(){
        super(ItemType.ClothingPart);
    }

    public create( name :string, level : number, armor : number, camouflageFactor : number) : ClothingPart{
        let newItem = new ClothingPart;
        this.fillBaseItemData(newItem, name, level);
        newItem.armor = armor
        newItem.camouflageFactor = camouflageFactor;
        newItem.isEquipped = false;
        return newItem;
    }
}