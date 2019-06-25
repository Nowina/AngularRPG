import { Component, OnInit } from '@angular/core';
import { Seed } from './data-source/seed/seed';
import { ItemRepository } from './data-source/repositories/item-repository';
import { Hero } from './models/hero/hero';
import { WarriorFactory } from './data-source/factories/hero/warrior.factory';
import { HeroRepository } from './data-source/repositories/hero-repository';
import { IEquipmentService } from './services/equipment.service';
import { IContainerService } from './services/container.service';
import { Backpack } from './models/item/backpack.item';
import { Weapon } from './models/item/weapon.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RPG';
  constructor(private readonly seed: Seed, private readonly itemRepo: ItemRepository,
    private readonly warriorFactory: WarriorFactory,
    private readonly heroRepository: HeroRepository,
    private readonly equipmentService: IEquipmentService,
    private readonly containerService: IContainerService) {

  }

  ngOnInit() {
    this.seed.seedData(this.itemRepo);
    let hero = this.warriorFactory.create("Johny Bravo", 100);
    this.heroRepository.add(hero);
    let backpack: Backpack = this.itemRepo.getBackpacks()[1];
    this.equipmentService.addItemToEquipment(backpack, hero.equipment);
    let weapons: Weapon[] = this.itemRepo.getWeapons();
    this.containerService.addItemsToContainer(weapons, hero.equipment.container);
    this.equipmentService.addItemToEquipment(this.itemRepo.getClothingParts()[0], hero.equipment);
  }
}

