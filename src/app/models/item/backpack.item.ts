import { Item } from './item';
import { Hero } from '../hero/hero';
import { IEquipable } from '../interfaces/equipable';
import { IContainer } from '../interfaces/container';

export class Backpack extends Item implements IEquipable,IContainer {
    public items: Item[];
    public weight: number;
    public currentCapacity: number;
    public owner: Hero;
    public maxCapacity: number;
    public isEquipped: boolean;
}