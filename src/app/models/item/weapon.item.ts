import { Item } from './item';
import { IUsable } from '../interfaces/usable';
import { Hero } from '../hero/hero';

export class Weapon extends Item implements IUsable {
    public owner: Hero;
    public durabillity: number;
    public usageFactor: number;
    public range: number;
    public isEquipped: boolean;
}