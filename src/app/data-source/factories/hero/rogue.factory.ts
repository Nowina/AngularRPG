import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Rogue } from 'src/app/models/hero/rogue';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { EquipmentFactory } from '../other/equipment.factory';
import { Injectable } from '@angular/core';
@Injectable()
export class RogueFactory extends HeroFactory {
    constructor(private readonly digitGenerator: DigitGenerator, private readonly equipmentFactory: EquipmentFactory) {
        super(HeroType.Rogue, digitGenerator, equipmentFactory);
    }

    public create(name: string, level: number): Rogue {
        let newHero = new Rogue();
        this.fillBaseHeroData(newHero, name, level);
        newHero.swiftness = level * 5;
        return newHero;
    }
}