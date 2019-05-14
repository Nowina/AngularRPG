import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Rogue } from 'src/app/models/hero/rogue';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { EquipmentFactory } from '../other/equipment.factory';

export class RogueFactory extends HeroFactory {
    constructor(digitGenerator: DigitGenerator, EquipmentFactory: EquipmentFactory) {
        super(HeroType.Rogue,digitGenerator,EquipmentFactory);
    }

    public create(name: string, level: number): Rogue {
        let newHero = new Rogue();
        this.fillBaseHeroData(newHero, name, level);
        newHero.swiftness = level * 5;
        return newHero;
    }
}