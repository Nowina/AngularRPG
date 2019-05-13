import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Warrior } from 'src/app/models/hero/warrior';
import { DigitGenerator } from 'src/app/utilities/digit-generator';


export class WarriorFactory extends HeroFactory {
    constructor(digitGenerator: DigitGenerator) {
        super(HeroType.Warrior,digitGenerator);
    }

    public create(name: string, level: number): Warrior {
        let newHero = new Warrior();
        this.fillBaseHeroData(newHero, name, level);
        newHero.weaponSkill = level * 2;
        return newHero;
    }
}