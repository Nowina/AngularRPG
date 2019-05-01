import { Component, OnInit } from '@angular/core';
import { Warrior, heroType, Hero} from "../../models/hero"
import { Weapon, itemType } from "../../models/item"
import { HeroFactory } from 'src/app/data-source/factories/hero/hero-factory';
import { WarriorFactory } from 'src/app/data-source/factories/hero/warrior-factory';
import { MagerFactory } from 'src/app/data-source/factories/hero/mage-factory';
import { Seed } from 'src/app/data-source/seed/seed';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let seed = new Seed();
    let itemRepo = new ItemRepository();
    let hero : Warrior = new WarriorFactory().create("JohnyBravo",1);
    seed.seedData(itemRepo);
    console.log(hero);
    console.log(itemRepo.getByType(itemType.Backpack));
  }

}
