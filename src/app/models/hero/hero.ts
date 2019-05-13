import { Point } from '../map/point';
import { HeroStatus } from '../enums/hero-status';
import { HeroType } from '../enums/hero-type';
import { IContainerHandler } from '../interfaces/container-handler';
import { IContainer } from '../interfaces/container';

export abstract class Hero implements IContainerHandler {
    public maxLoad: number;
    public currentLoad: number;
    public container: IContainer;

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
