import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item/item';
import { ItemType } from 'src/app/models/enums/item-type';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() displayedItem: Item;
  
  constructor() { }

  ngOnInit() {}

  isLoaded(): boolean {
      return this.displayedItem != null;
  }

  getItemType(itemType: ItemType): string{
    return ItemType[itemType];
  }
}
