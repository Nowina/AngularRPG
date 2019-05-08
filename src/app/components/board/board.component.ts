import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/data-source/seed/seed';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';
import { Warrior } from 'src/app/models/hero/warrior';
import { WarriorFactory } from 'src/app/data-source/factories/hero/warrior.factory';
import { BackpackFactory } from 'src/app/data-source/factories/item/backpack.factory';
import { MapFactory } from 'src/app/data-source/factories/map/map-factory';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { MapTileType } from 'src/app/models/enums/map-tile-type';
import { SquareMap } from 'src/app/models/map/square-map';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let seed: Seed = new Seed();
    let map: SquareMap = seed.seedMap();
    console.log(map);
  }

}
