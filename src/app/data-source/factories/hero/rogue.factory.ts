import { HeroFactory } from './hero.factory';
import { HeroType } from 'src/app/models/enums/hero-type';
import { Rogue } from 'src/app/models/hero/rogue';

export class RogueFactory extends HeroFactory{
    constructor(){
        super(HeroType.Rogue);
    }

    public create(name:string, level : number): Rogue{
        let newHero = new Rogue();
        this.fillBaseHeroData(newHero, name, level);
        newHero.swiftness = level*5;
        return newHero;
    }
}