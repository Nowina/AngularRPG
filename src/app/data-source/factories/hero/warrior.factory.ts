import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Warrior } from 'src/app/models/hero/warrior';
import { MapUtilities } from 'src/app/utilities/map-utilities';


export class WarriorFactory extends HeroFactory {
    constructor(mapUtils: MapUtilities) {
        super(HeroType.Warrior, mapUtils);
    }

    public create(name: string, level: number): Warrior {
        let newHero = new Warrior();
        this.fillBaseHeroData(newHero, name, level);
        newHero.weaponSkill = level * 2;
        return newHero;
    }
}