import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Mage } from 'src/app/models/hero/mage';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { EquipmentFactory } from '../other/equipment.factory';

export class MageFactory extends HeroFactory {

    constructor(digitGenerator: DigitGenerator, EquipmentFactory: EquipmentFactory) {
        super(HeroType.Mage, digitGenerator, EquipmentFactory);
    }

    public create(name: string, level: number): Mage {
        let newHero = new Mage();
        this.fillBaseHeroData(newHero, name, level);
        newHero.maxMana = level * 50;
        newHero.mana = newHero.maxMana;
        newHero.magicExp = 0;
        return newHero;
    }
}