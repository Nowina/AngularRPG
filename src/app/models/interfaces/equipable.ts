import { Hero } from '../hero/hero';

export interface IEquipable {
    owner: Hero;
    isEquipped: boolean;
}