import { Component, OnInit } from '@angular/core';
import { WarriorFactory } from 'src/app/data-source/factories/hero/warrior.factory';
import { EquipmentFactory } from 'src/app/data-source/factories/other/equipment.factory';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';
import { Seed } from 'src/app/data-source/seed/seed';
import { KeyboardListener } from 'src/app/directives/keyboard-listener.directive';
import { OctileDirectionsEnum } from 'src/app/models/enums/octile-direction';
import { Warrior } from 'src/app/models/hero/warrior';
import { Point } from 'src/app/models/map/point';
import { SquareMap } from 'src/app/models/map/square-map';
import { MovementService } from 'src/app/services/movement.service';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { Directions } from 'src/app/utilities/directions';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    let seed: Seed = new Seed(new DigitGenerator());
    let map: SquareMap = seed.seedMap();
    let itemRepo: ItemRepository = new ItemRepository();
    seed.seedData(itemRepo);

    let hero: Warrior = new WarriorFactory(new DigitGenerator(), new EquipmentFactory()).create("JohnyBravo",1);
    let keyboardListener: KeyboardListener = new KeyboardListener();
    let movementService: MovementService = new MovementService(new Directions(), keyboardListener);

    movementService.placeOnMap(hero,map,new Point(0,0));
    movementService.octileMove(hero, map, OctileDirectionsEnum.S);
    movementService.octileMove(hero, map, OctileDirectionsEnum.E);
    movementService.octileMove(hero, map, OctileDirectionsEnum.NW);
    map.logMapToConsole();
  }
  
}
