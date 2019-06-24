import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Mage } from 'src/app/models/hero/mage';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { EquipmentFactory } from '../other/equipment.factory';
import { Injectable } from '@angular/core';
@Injectable()
export class MageFactory extends HeroFactory {

    constructor(private readonly digitGenerator: DigitGenerator, private readonly equipmentFactory: EquipmentFactory) {
        super(HeroType.Mage, digitGenerator, equipmentFactory);
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