import { Hero } from '../hero/hero';

export interface IPickable {
    pickFlag: boolean;
    owner: Hero;
    isEquipped: boolean;
    weight: number;
}