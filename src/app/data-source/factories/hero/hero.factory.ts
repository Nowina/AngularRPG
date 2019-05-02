import { Hero} from "src/app/models/hero/hero";

import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { HeroType } from 'src/app/models/enums/hero-type';
import { HeroStatus } from 'src/app/models/enums/hero-status';

export abstract class HeroFactory{
    private digitGenerator : DigitGenerator;

    constructor(private heroType: HeroType){
        this.heroType = heroType;
        this.digitGenerator = new DigitGenerator();
    }

    protected fillBaseHeroData(hero:Hero, name:string, level:number): void{
        hero.name = name;
        hero.level = level;
        hero.health = 100;
        hero.stamina = 100;
        hero.strength = this.digitGenerator.getRandomNumber(level*10);
        hero.heroStatus = HeroStatus.Healthy;
        hero.experience = 0;
        hero.armor = this.digitGenerator.getRandomNumber(level*10);
        hero.heroType = this.heroType;
        hero.position = this.digitGenerator.getRandomPosition(20);
    }
}