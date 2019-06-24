import { Injectable } from "@angular/core";
import { Repository } from './repository';
import { Hero } from 'src/app/models/hero/hero';


@Injectable()
export class HeroRepository extends Repository<Hero> {
    constructor(){
        super();
    }

    public getHero(): Hero {
        return this.items[0];
    }

}