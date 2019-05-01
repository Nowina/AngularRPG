import { Hero, heroType, heroStatus } from "src/app/models/hero";
import { Point } from 'src/app/models/point';
import { getRandomNumber } from 'src/app/utilities/utilities';

export abstract class HeroFactory{
    private heroType: heroType;

    constructor(heroType: heroType){
        this.heroType = heroType;
    }

    protected fillBaseHeroData(hero :Hero, name:string, level:number): void{
        hero.name = name;
        hero.level = level;
        hero.health = 100;
        hero.stamina = 100;
        hero.strength = getRandomNumber(level*10);
        hero.heroStatus = heroStatus.Healthy;
        hero.experience = 0;
        hero.armor = getRandomNumber(level*10);
        hero.heroType = this.heroType;
        hero.position = this.getRandomPosition();
    }

    protected getRandomPosition():Point{
        return new Point(getRandomNumber(20),getRandomNumber(20));
    }
}