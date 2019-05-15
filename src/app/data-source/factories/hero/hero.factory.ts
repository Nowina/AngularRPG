import { Hero } from "src/app/models/hero/hero";

import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { HeroType } from 'src/app/models/enums/hero-type';
import { HeroStatus } from 'src/app/models/enums/hero-status';
import { EquipmentFactory } from '../other/equipment.factory';


export abstract class HeroFactory {

    constructor(private heroType: HeroType, private DigitGenerator: DigitGenerator, private EquipmentFactory: EquipmentFactory ) {
    }

    protected fillBaseHeroData(hero: Hero, name: string, level: number): void {
        hero.name = name;
        hero.level = level;
        hero.health = 100;
        hero.stamina = 100;
        hero.strength = this.DigitGenerator.getRandomNumber(level *5,level*3);
        hero.heroStatus = HeroStatus.Healthy;
        hero.experience = 0;
        hero.armor = this.DigitGenerator.getRandomNumber(level * 10);
        hero.heroType = this.heroType;
        hero.movementSpeed = 2;
        this.EquipmentFactory.createAddEquipment(hero);
    }
}