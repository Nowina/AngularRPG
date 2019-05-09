import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/data-source/seed/seed';
import { SquareMap } from 'src/app/models/map/square-map';
import { ItemRepository } from 'src/app/data-source/repositories/item-repository';

import { ItemType } from 'src/app/models/enums/item-type';
import { Backpack } from 'src/app/models/item/backpack.item';
import { IContainerService } from 'src/app/services/container-service';
import { Weapon } from 'src/app/models/item/weapon.item';

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
    let itemRepo: ItemRepository = new ItemRepository();
    seed.seedData(itemRepo);
    let backpack = itemRepo.getBackpacks()[0];
    let weapons = itemRepo.getWeapons();
    let ContainerService: IContainerService = new IContainerService();
    ContainerService.addItemsToContainer(weapons, backpack);
    ContainerService.removeFromContainer(weapons[0], backpack);
    console.log(ContainerService.getItemsFromContainer(backpack));

  }


}
