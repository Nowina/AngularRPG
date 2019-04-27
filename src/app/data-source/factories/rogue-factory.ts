import { HeroFactory } from './hero-factory';
import { heroType, Rogue } from 'src/app/models/hero';

export class RogueFactory extends HeroFactory{
    constructor(){
        super(heroType.Rogue);
    }

    public create(name:string, level : number): Rogue{
        let newHero = new Rogue();
        this.fillBaseHeroData(newHero,name, level);
        newHero.swiftness = level*5;
        return newHero;
    }
}