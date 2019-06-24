import { Component, OnInit, ViewChild } from '@angular/core';
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
import { KeyboardController } from 'src/app/controllers/keyboard-event.controller';
import { HeroRepository } from 'src/app/data-source/repositories/hero-repository';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {
  @ViewChild(KeyboardListener, { static: true })
  private keyboardListener: KeyboardListener;

  constructor(private readonly seed: Seed, private readonly heroRepository: HeroRepository) { }

  ngOnInit() {
    let map: SquareMap = this.seed.seedMap()
    let hero: Warrior = this.heroRepository.getHero() as Warrior;
    let movementService: MovementService = new MovementService(new Directions());
    let keyboardController: KeyboardController = new KeyboardController(this.keyboardListener, movementService, map, hero);
    movementService.placeOnMap(hero, map, new Point(0, 0));
    console.log(hero);
    map.drawMap();
  }

}
