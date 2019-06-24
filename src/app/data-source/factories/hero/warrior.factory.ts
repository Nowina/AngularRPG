import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Warrior } from 'src/app/models/hero/warrior';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { EquipmentFactory } from '../other/equipment.factory';

import { Injectable } from '@angular/core';

@Injectable()
export class WarriorFactory extends HeroFactory {
    constructor(private readonly digitGenerator: DigitGenerator, private readonly equipmentFactory: EquipmentFactory) {
        super(HeroType.Warrior, digitGenerator, equipmentFactory);
    }

    public create(name: string, level: number): Warrior {
        let newHero = new Warrior();
        this.fillBaseHeroData(newHero, name, level);
        newHero.weaponSkill = level * 2;
        return newHero;
    }
}