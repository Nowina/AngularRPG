import { ItemFactory } from './item-factory';
import { itemType, Weapon, ClothingPart } from 'src/app/models/item';

export class ClothingFactory extends ItemFactory{
    constructor(){
        super(itemType.ClothingPart);
    }

    public create( name :string, level : number,armor : number,camouflageFactor : number,weight : number) : ClothingPart{
        let newItem = new ClothingPart;
        this.fillBaseItemData(newItem,weight,name,level);
        newItem.armor = armor
        newItem.camouflageFactor = camouflageFactor;
        return newItem;
    }
}