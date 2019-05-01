import { HeroFactory } from './hero-factory';
import { heroType, Warrior } from 'src/app/models/hero';

export class WarriorFactory extends HeroFactory{
    constructor(){
        super(heroType.Warrior);
    }

    public create(name:string, level : number): Warrior{
        let newHero = new Warrior();
        this.fillBaseHeroData(newHero,name, level);
        newHero.weaponSkill = level*2;
        return newHero;
    }
}