import { WarriorFactory } from '../factories/hero/warrior-factory';
import { WeaponFactory } from '../factories/item/weapon-factory';
import { ItemRepository } from '../repositories/item-repository';
import { Hero } from 'src/app/models/hero';
import { BackpackFactory } from '../factories/item/backpack-factory';
import { ClothingFactory } from '../factories/item/clothing-factory';
import { Weapon, Backpack } from 'src/app/models/item';

export class Seed{
    private WeaponFactory: WeaponFactory;
    private BackpackFactory : BackpackFactory;
    private ClothingFacory : ClothingFactory;
    private WarriorFactory : WarriorFactory;

    constructor(){
        this.WeaponFactory = new WeaponFactory();
        this.WarriorFactory = new WarriorFactory();
        this.ClothingFacory = new ClothingFactory();
        this.BackpackFactory = new BackpackFactory();
    }

    public seedData(itemRepo: ItemRepository, hero : Hero){

    }

    private addWeapons() : Weapon []{
        let weapons: Weapon [] = [];
        weapons.push(this.WeaponFactory.create("Sword",1,10,1,10));
        weapons.push(this.WeaponFactory.create("Bow",2,15,5,8));
        return weapons;
    }

    private addBackpacks() : Backpack [] {
        let backpacks: Backpack[] = [];
        backpacks.push(this.BackpackFactory.create("Small Backpack",1,2));
        backpacks.push(this.BackpackFactory.create("Big backpack",3,3));
        return backpacks;
    }

    private addClothing() {
        
    }
}