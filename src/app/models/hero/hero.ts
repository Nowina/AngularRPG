import { Point } from '../map/point';
import { HeroStatus } from '../enums/hero-status';
import { HeroType } from '../enums/hero-type';
import { Equipment } from '../other/equipment';
import { IMovable } from '../interfaces/movable';

export abstract class Hero implements IMovable {
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
    public movementSpeed: number;
}
