import { Item } from './item';
import { Hero } from '../hero/hero';

export class ClothingPart extends Item  {
    public owner: Hero;
    public armor: number;
    public camouflageFactor: number;
    public isEquipped: boolean;
}
