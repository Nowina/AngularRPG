import { getRandomNumber } from "../utilities/utilities"
import { Point } from './point';
export enum heroStatus {
    Dead,
    Injured,
    Ill,
    Healthy
}
export enum heroType {
    Warrior,
    Mage,
    Rogue
}
export abstract class Hero {
    public name: string;
    public health : number;
    public stamina : number;
    public strength : number;
    public heroStatus : heroStatus;
    public level : number;
    public experience : number;
    public armor : number;
    public heroType: heroType;
    public position: Point;

}

export class Mage extends Hero{
    public mana: number;
    public maxMana: number;
    public magicExp : number;  
}

export class Warrior extends Hero{
    public weaponSkill : number;
}

export class Rogue extends Hero{
    public swiftness : number;
}