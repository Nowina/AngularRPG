import { Component, OnInit } from '@angular/core';
import { Seed } from './data-source/seed/seed';
import { ItemRepository } from './data-source/repositories/item-repository';
import { Hero } from './models/hero/hero';
import { WarriorFactory } from './data-source/factories/hero/warrior.factory';
import { HeroRepository } from './data-source/repositories/hero-repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RPG';
  constructor(private readonly seed: Seed, private readonly itemRepo: ItemRepository, 
    private readonly warriorFactory: WarriorFactory,
    private readonly heroRepository: HeroRepository){

  }

  ngOnInit(){
    this.seed.seedData(this.itemRepo);
    let hero = this.warriorFactory.create("Johny Bravo", 1);
    this.heroRepository.add(hero);
  }
}

