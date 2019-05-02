import { Item } from './item';
import { Hero } from '../hero/hero';
import { IEquipable } from '../interfaces/equipable';

export class ClothingPart extends Item implements IEquipable {
    public owner: Hero;
    public armor : number;
    public camouflageFactor : number;
    public isEquipped : boolean;
}
