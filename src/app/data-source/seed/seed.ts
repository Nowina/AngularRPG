import { WeaponFactory } from '../factories/item/weapon.factory';
import { ItemRepository } from '../repositories/item-repository';
import { BackpackFactory } from '../factories/item/backpack.factory';
import { ClothingFactory } from '../factories/item/clothing.factory';
import { Weapon } from 'src/app/models/item/weapon.item';
import { Backpack } from 'src/app/models/item/backpack.item';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';
import { SquareMap } from 'src/app/models/map/square-map';
import { MapUtilities } from 'src/app/utilities/map-utilities';
import { MapFactory } from '../factories/map/map-factory';
import { RoadOnMapFactory } from '../factories/map/road-on-map-factory';
import { DigitGenerator } from 'src/app/utilities/digit-generator';
import { Directions } from 'src/app/utilities/directions';
import { Injectable } from '@angular/core';

@Injectable()
export class Seed {
    private RoadOnMapGenerator: RoadOnMapFactory;
    private map: SquareMap;
    private mapUtils: MapUtilities;
    private MapFactory: MapFactory;

    constructor(private readonly digitGenerator: DigitGenerator,
        private readonly WeaponFactory: WeaponFactory,
        private readonly ClothingFactory: ClothingFactory,
        private readonly BackpackFactory: BackpackFactory,
        ) {
            this.MapFactory = new MapFactory();
    }

    public seedData(itemRepo: ItemRepository): void {
        itemRepo.addArray(this.seedWeapons());
        itemRepo.addArray(this.seedBackpacks());
        itemRepo.addArray(this.seedClothing());
    }

    public seedMap(): SquareMap{
        this.map = this.MapFactory.create(10);
        this.mapUtils = new MapUtilities(this.map,this.digitGenerator, new Directions);
        this.RoadOnMapGenerator = new RoadOnMapFactory(this.map, this.digitGenerator);
        this.RoadOnMapGenerator.createRoad(4);
        return this.map;
    }

    private seedWeapons(): Weapon[] {
        let weapons: Weapon[] = [];
        weapons.push(this.WeaponFactory.create("Sword", 1, 1, 1));
        weapons.push(this.WeaponFactory.create("Bow", 2, 5, 1));
        return weapons;
    }

    private seedBackpacks(): Backpack[] {
        let backpacks: Backpack[] = [];
        backpacks.push(this.BackpackFactory.create("Small Backpack", 1));
        backpacks.push(this.BackpackFactory.create("Big backpack", 30));
        return backpacks;
    }

    private seedClothing(): ClothingPart[] {
        let clothing: ClothingPart[] = [];
        clothing.push(this.ClothingFactory.create("Pants", 1, 1, 2))
        clothing.push(this.ClothingFactory.create("Ghillie", 10, 10, 4));
        return clothing;
    }
}