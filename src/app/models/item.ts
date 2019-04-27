
export enum itemStatus{
    Disabled,
    Active, 
    Damaged
}
export enum itemType{
    Weapon,
    ClothingPart,
    Backpack
}

export abstract class Item{
    public weight : number;
    public name : string;
    public durability : number;
    public status: itemStatus;
    public level : number;
}

export class Weapon extends Item{
    public damage : number;
    public range : number;
}

export class ClothingPart extends Item {
    public armor : number;
    public camouflageFactor : number;
}

export class Backpack extends Item {
    public capacity : number;
}

