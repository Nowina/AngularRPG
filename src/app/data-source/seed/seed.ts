import { WarriorFactory } from '../factories/hero/warrior.factory';
import { WeaponFactory } from '../factories/item/weapon.factory';
import { ItemRepository } from '../repositories/item-repository';
import { BackpackFactory } from '../factories/item/backpack.factory';
import { ClothingFactory } from '../factories/item/clothing.factory';
import { Weapon } from 'src/app/models/item/weapon.item';
import { Backpack } from 'src/app/models/item/backpack.item';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';

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
        itemRepo.addArray(this.getWeapons());
        itemRepo.addArray(this.getBackpacks());
        itemRepo.addArray(this.getClothing());
    }

    private getWeapons() : Weapon []{
        let weapons: Weapon [] = [];
        weapons.push(this.WeaponFactory.create("Sword", 1, 1, 10));
        weapons.push(this.WeaponFactory.create("Bow", 2, 5, 8));
        return weapons;
    }

    private getBackpacks() : Backpack [] {
        let backpacks: Backpack[] = [];
        backpacks.push(this.BackpackFactory.create("Small Backpack", 2));
        backpacks.push(this.BackpackFactory.create("Big backpack", 3));
        return backpacks;
    }

    private getClothing() : ClothingPart [] {
        let clothing : ClothingPart [] = [];
        clothing.push(this.ClothingFactory.create("Pants", 1, 1, 2))
        clothing.push(this.ClothingFactory.create("Ghillie", 10, 10, 4));
        return clothing;
    }
}