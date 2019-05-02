import { Item } from './item';
import { Hero } from '../hero/hero';
import { IEquipable } from '../interfaces/equipable';

export class Backpack extends Item implements IEquipable {
    public owner : Hero;
    public capacity : number;
    public isEquipped : boolean;
}