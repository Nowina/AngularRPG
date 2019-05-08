import { Hero } from "src/app/models/hero/hero";

import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { HeroType } from 'src/app/models/enums/hero-type';
import { HeroStatus } from 'src/app/models/enums/hero-status';
import { MapUtilities } from 'src/app/utilities/map-utilities';
import { SquareMap } from 'src/app/models/map/square-map';


export abstract class HeroFactory {
    private DigitGenerator: DigitGenerator;

    constructor(private heroType: HeroType, private MapUtilities: MapUtilities) {
        this.heroType = heroType;
        this.DigitGenerator = new DigitGenerator();
        this.MapUtilities = MapUtilities;
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
        hero.position = this.MapUtilities.getRandomPosition();
    }
}