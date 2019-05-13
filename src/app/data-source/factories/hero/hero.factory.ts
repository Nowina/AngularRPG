import { Hero } from "src/app/models/hero/hero";

import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { HeroType } from 'src/app/models/enums/hero-type';
import { HeroStatus } from 'src/app/models/enums/hero-status';


export abstract class HeroFactory {
    private DigitGenerator: DigitGenerator;

    constructor(private heroType: HeroType, private digitGenerator: DigitGenerator ) {
        this.heroType = heroType;
        this.DigitGenerator = digitGenerator;
    }

    protected fillBaseHeroData(hero: Hero, name: string, level: number): void {
        hero.name = name;
        hero.level = level;
        hero.health = 100;
        hero.stamina = 100;
        hero.strength = this.DigitGenerator.getRandomNumber(level * 10);
        hero.heroStatus = HeroStatus.Healthy;
        hero.experience = 0;
        hero.armor = this.DigitGenerator.getRandomNumber(level * 10);
        hero.heroType = this.heroType;
        hero.maxLoad = hero.strength*5;
        hero.currentLoad = 0;
        hero.container = null;
    }
}