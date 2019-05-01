import { WarriorFactory } from '../factories/hero/warrior-factory';
import { WeaponFactory } from '../factories/item/weapon-factory';
import { ItemRepository } from '../repositories/item-repository';
import { Hero } from 'src/app/models/hero';
import { BackpackFactory } from '../factories/item/backpack-factory';
import { ClothingFactory } from '../factories/item/clothing-factory';
import { Weapon, Backpack, ClothingPart, Item } from 'src/app/models/item';

export class Seed{
    private WeaponFactory: WeaponFactory;
    private BackpackFactory : BackpackFactory;
    private ClothingFactory : ClothingFactory;
    private WarriorFactory : WarriorFactory;

    constructor(){
        this.WeaponFactory = new WeaponFactory();
        this.WarriorFactory = new WarriorFactory();
        this.ClothingFactory = new ClothingFactory();
        this.BackpackFactory = new BackpackFactory();
    }

    public seedData(itemRepo: ItemRepository) : void {
        itemRepo.addArray(this.addWeapons());
        itemRepo.addArray(this.addBackpacks());
        itemRepo.addArray(this.addClothing());
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

    private addClothing() : ClothingPart [] {
        let clothing : ClothingPart [] = [];
        clothing.push(this.ClothingFactory.create("Pants",1,1,1,2))
        clothing.push(this.ClothingFactory.create("Ghillie",10,5,10,4));
        return clothing;
    }
}