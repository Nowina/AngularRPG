import { Item } from './item';
import { Hero } from '../hero/hero';
import { IContainer } from '../interfaces/container';
import { IPickable } from '../interfaces/pickable';

export class Backpack extends Item implements IContainer {
    public maxItemsWeight: number;
    public currentItemsWeight: number;
    
    public items: IPickable[];
    public owner: Hero;
    public isEquipped: boolean;
}