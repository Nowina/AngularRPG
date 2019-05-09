import { Item } from './item';
import { Hero } from '../hero/hero';
import { IContainer } from '../interfaces/container';
import { IPickable } from '../interfaces/pickable';

export class Backpack extends Item implements IContainer {
    public items: IPickable[];
    public currentCapacity: number;
    public owner: Hero;
    public maxCapacity: number;
    public isEquipped: boolean;
}