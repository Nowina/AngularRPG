import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item/item';
import { ItemType } from 'src/app/models/enums/item-type';
import { EquipmentViewerController } from 'src/app/controllers/equipment-viewer.controller';
import { WeaponDetailsComponent } from './typed-item-details/weapon-details/weapon-details.component';
import { BackpackDetailsComponent } from './typed-item-details/backpack-details/backpack-details.component';
import { ClothingPartDetailsComponent } from './typed-item-details/clothing-part-details/clothing-part-details.component';
import { Backpack } from 'src/app/models/item/backpack.item';
import { Weapon } from 'src/app/models/item/weapon.item';
import { ClothingPart } from 'src/app/models/item/clothing-part.item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() displayedItem: Item;
  public ItemType = ItemType;
  constructor() { 
  }

  ngOnInit() {}

  public isLoaded(): boolean {
      return this.displayedItem != null;
  }

  public getItemType(itemType: ItemType): string{
    return ItemType[itemType];
  }

  public getItemAsBackpack(): Backpack {
    return this.displayedItem as Backpack;    
  }

  public getItemAsWeapon(): Weapon {
    return this.displayedItem as Weapon;
  }

  public getItemAsClothingPart(): ClothingPart {
    return this.displayedItem as ClothingPart;
  }
}
