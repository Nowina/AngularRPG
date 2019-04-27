import { HeroFactory } from './hero-factory';
import { heroType, Mage } from 'src/app/models/hero';

export class MagerFactory extends HeroFactory{
    constructor(){
        super(heroType.Mage);
    }

    public create(name:string, level : number): Mage{
        let newHero = new Mage();
        this.fillBaseHeroData(newHero,name, level);
        newHero.maxMana = level*50;
        newHero.mana = newHero.maxMana;
        newHero.magicExp = 0;
        return newHero;
    }
}