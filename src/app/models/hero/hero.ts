import { Point } from '../map/point';
import { HeroStatus } from '../enums/hero-status';
import { HeroType } from '../enums/hero-type';
import { Equipment } from '../other/equipment';

export abstract class Hero {
    public equipment: Equipment;
    public name: string;
    public health: number;
    public stamina: number;
    public strength: number;
    public heroStatus: HeroStatus;
    public level: number;
    public experience: number;
    public armor: number;
    public heroType: HeroType;
    public position: Point;

}
