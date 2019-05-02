import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/data-source/seed/seed';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';
import { Warrior } from 'src/app/models/hero/warrior';
import { WarriorFactory } from 'src/app/data-source/factories/hero/warrior.factory';
import { BackpackFactory } from 'src/app/data-source/factories/item/backpack.factory';

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
    console.log(itemRepo.getAll());
  }

}
